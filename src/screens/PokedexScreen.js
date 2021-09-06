import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../store/actions/pokemons';
import FooterButtons from '../components/FooterButtons';
import LoadingView from '../components/LoadingView';
import PokemonCard from '../components/PokemonCard';
import ErrorView from '../components/ErrorView';

const PokedexScreen = () =>{
    const pokemons = useSelector((state) => state.Pokemons.pokemons);
    const length = useSelector((state) => state.Pokemons.count);
    const hasError = useSelector((state) => state.Pokemons.hasError);
    const themeColor = useSelector((state) => state.Settings.color);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const renderItem = ({ item }) =>  <PokemonCard item = {item}/>;  
    //const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        getAllPokemons();
    },[offset]);

    const getAllPokemons = async () => {
        await dispatch(getPokemons(offset));
        setIsLoading(false)
    };

    //add blank data to fill blank
    const formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
      
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
          data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
          numberOfElementsLastRow++;
        }
      
        return data;
    };

    const nextData = async() => {
        setIsLoading(true)
        if(offset < length)
            setOffset(offset + 20);
        await dispatch(getPokemons(offset));
        setIsLoading(false)
    };

    const prevData = async() => {

        setIsLoading(false)

        if(offset > 0){
            setOffset(offset - 20);
        }
        await dispatch(getPokemons(offset));

        setIsLoading(true)
    };

    const renderFooter = () => {
        return (<FooterButtons next={()=>nextData()} prev={()=>prevData()} offset={offset} length={length}/>);
    };

    return (
    <>
        { isLoading ? 
            <LoadingView text={"Loading..."}/>
            : 
            hasError ? 
                <ErrorView text={"Something went wrong please try again !!"} />
                :
                <FlatList
                    data = {formatData(pokemons, 2)}
                    renderItem = {renderItem}
                    keyExtractor={item => item.name}
                    numColumns={2}
                    style={{backgroundColor: themeColor == 'black' ? '#333231': 'rgb(245, 245, 240)'}}
                    contentContainerStyle={{flexGrow: 1}}
                    ListFooterComponent={renderFooter}
                />
        }
    </>
    )
}

export default PokedexScreen