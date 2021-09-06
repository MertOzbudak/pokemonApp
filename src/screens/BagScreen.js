import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon } from '../store/actions/bag';
import PokemonCard from '../components/PokemonCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native'
import EmptyBagView from '../components/EmptyBagView';
import { getAsyncData } from '../utils/validation';

const BagScreen = () =>{
    const  [caughtPokemons, setCaughtPokemons] = useState(useSelector((state) => state.Bag.caughtPokemons));
    const themeColor = useSelector((state) => state.Settings.color);
    const [isEmpty, setIsEmpty] = useState(true);
    const renderItem = ({ item }) =>  <PokemonCard item = {item}/>;  
    const isFocused = useIsFocused()

    useEffect(() => {
        console.log("BAG: ")
        caughtPokemons.length != 0 ? setIsEmpty(false) : setIsEmpty(true)
        getAsync()
    },[isFocused]);

    const getAsync= async()=>{
        var pokeballs = JSON.parse(await AsyncStorage.getItem('pokeballs'));
        
    }

    return ( 
        <>
        { 
            isEmpty ? 
                <EmptyBagView text={"Bag is Empty"} themeColor={themeColor}/>
                : 
                <FlatList
                    data = {caughtPokemons}
                    renderItem = {renderItem}
                    keyExtractor={item=>item.id}
                    numColumns={2}
                    style={{backgroundColor: themeColor == 'black' ? '#333231': 'rgb(245, 245, 240)'}}
                />
        }
        </>
    )
}

export default BagScreen