import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetails } from '../store/actions/pokemons';
import { catchPokemon, releasePokemon, addFavouriteCaughtPokemon, deleteFavouriteCaughtPokemon} from '../store/actions/bag';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import StarButton from '../components/StarButton';
import PokeButton from '../components/PokeButton';
import LoadingView from '../components/LoadingView';
import ErrorView from '../components/ErrorView';
import { ScrollView } from 'react-native-gesture-handler';
import GeneraView from '../components/GeneraView';
import PokemonImage from '../components/PokemonImage';
import DetailBodyView from '../components/DetailBodyView';
import HeaderInfoView from '../components/HeaderInfoView';
import * as constants from '../constants/constant';

const DetailScreen = (props) =>{
    const {id} = props.route.params;
    const pokemonDetails = useSelector((state) => state.Pokemons.details);
    const hasError = useSelector((state) => state.Pokemons.hasDetailError);
    const [isCaughted, setIsCaughted] = useState(useSelector((state) => state.Bag.caughtPokemons.some(item=>item.id == id)));
    const [isFavourite, setIsFavourite] = useState(useSelector((state) => state.Bag.favPokemons.some(item=>item.id == id)));
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [imageloading, setImageLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        getPokemonDetailsByID();
    },[isCaughted]);

    const getPokemonDetailsByID = async () => {
        await dispatch(getPokemonDetails(id));
        setIsLoading(false)
    };

    const releasePokemonByID = async () => {
        await dispatch(releasePokemon(id));
        await setIsCaughted(false)
        navigation.goBack()
    };

    const catchPokemonByID = async () => {
        await dispatch(catchPokemon(pokemonDetails.name, id, pokemonDetails.url))
        setIsCaughted(true)
    };

    const toggleFav = async () => {
        isFavourite ? await dispatch(deleteFavouriteCaughtPokemon(id)) : await dispatch(addFavouriteCaughtPokemon(id))

        setIsFavourite(!isFavourite)
    };

    return (
        <>
        { isLoading ? 
            <LoadingView text={constants.message.loading}/>
        : 
        hasError ? 
            <ErrorView text={constants.message.errorMsg}/>
            :
            <View style={{backgroundColor: pokemonDetails.color.toString(), flex: 1}}>
                <View testID={"HeaderButtons"} style={styles.headerButtonContainer}>
                    <View style={{flex:1, alignItems:'flex-start'}}>
                        <BackButton/>
                    </View>
                    <View style={{flex:1, alignItems:'flex-end'}}>
                    { isCaughted  ?
                        <StarButton action={()=>toggleFav()} boolean={isFavourite} backgroundColor={pokemonDetails.color.toString()}/>
                        :
                        <View></View>
                    }
                    </View>
                </View>
                <HeaderInfoView
                    name={pokemonDetails.name}
                    id={id}
                />
                <GeneraView
                    testID={"HeaderTypeAndGenera"}
                    data={pokemonDetails.type}
                    genera={pokemonDetails.genera}
                />
                <View testID={"ImageAndDetails"} style={[{...styles.ma, backgroundColor: pokemonDetails.color == 'white' ? 'gray' : pokemonDetails.color}]}>
                    <PokemonImage testID={"Image"}
                        id ={id}
                        imageloading={imageloading}
                        setImageLoading={()=>setImageLoading()}
                    />
                    <ScrollView testID={"Details"}>
                        <DetailBodyView
                            info={pokemonDetails.info}
                            weight={pokemonDetails.weight}
                            height={pokemonDetails.height}
                            eggGroups={pokemonDetails.eggGroups}
                        />
                    </ScrollView>
                </View>
                
                { isCaughted  ?
                    <PokeButton testID={"Button"} action={()=>releasePokemonByID()} colour={'mediumseagreen'} text={"Release"}/>
                    :
                    <PokeButton testID={"Button"} action={()=>catchPokemonByID()} colour={'royalblue'} text={"Catch"}/>
                }
            
            </View>
        }
        </> 
        
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    ma:{
        flex: 1, 
        alignItems:'center'
    },
    container:{
        backgroundColor:'light' + "green", 
        flex: 1
    },
    bodyContainer:{
        flex: 1,
        backgroundColor:'light' + "green", 
        alignItems:'center'
    },
    headerButtonContainer:{
        marginTop:'10%',
        width:Dimensions.get('window').width, 
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    
    headerTypeContainer:{
        width:Dimensions.get('window').width, 
        height: 60,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    typeContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    
  });