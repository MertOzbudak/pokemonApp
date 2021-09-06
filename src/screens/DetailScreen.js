import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, ActivityIndicator, StyleSheet, Dimensions} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetails } from '../store/actions/pokemons';
import { catchPokemon, releasePokemon, addFavouriteCaughtPokemon, deleteFavouriteCaughtPokemon} from '../store/actions/bag';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import StarButton from '../components/StarButton';
import PokeButton from '../components/PokeButton';
import {window} from '../utils/styles'
import { FlatList } from 'react-native';
import LoadingView from '../components/LoadingView';

const DetailScreen = (props) =>{
    const {id} = props.route.params;
    const pokemonDetails = useSelector((state) => state.Pokemons.details);
    const [isCaughted, setIsCaughted] = useState(useSelector((state) => state.Bag.caughtPokemons.some(item=>item.id == id)));
    const [isFavourite, setIsFavourite] = useState(useSelector((state) => state.Bag.favPokemons.some(item=>item.id == id)));
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [imageloading, setImageLoading] = useState(true);
    const navigation = useNavigation();

    const renderItem = ({ item }) =>  {
        return(
        <View style={{marginLeft:5, width:80, height:30, borderColor:'white', borderWidth:0.5, backgroundColor:'rgba(255,255,255,0.3)', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white'}}>{item.type.name}</Text>
        </View>
        )
    };  

    const renderEggGroups = ({ item }) =>  {
        return(
        <View style={{
            marginLeft:5, width:80, height:30, 
            borderColor:'black', borderWidth:0.5, 
            backgroundColor:'rgba(0,0,0,0.3)', 
            borderRadius:10, 
            justifyContent:'center', 
            alignItems:'center'
        }}>
            <Text style={{color:'black'}}>{item.name}</Text>
        </View>
        )
    };

    useEffect(() => {
        console.log("DETaIL: ")
        getPokemonDetailsByID();
    },[isCaughted]);

    const getPokemonDetailsByID = async () => {
        await dispatch(getPokemonDetails(id));
        setIsLoading(false)
    };

    const releasePokemonByID = async () => {
        await dispatch(releasePokemon(id));
        setIsCaughted(false)
        navigation.goBack()
    };

    const catchPokemonByID = async () => {
        await dispatch(catchPokemon(pokemonDetails.name, id, pokemonDetails.url))
        //navigation.goBack()
        setIsCaughted(true)
    };

    const toggleFav = async () => {
        isFavourite ? await dispatch(deleteFavouriteCaughtPokemon(id)) : await dispatch(addFavouriteCaughtPokemon(id))

        setIsFavourite(!isFavourite)
    };

    return (
        <>
        { isLoading ? 
            <LoadingView text={"Loading..."}/>
        : 
            <View style={{backgroundColor: pokemonDetails.color == 'white' ? 'gray' : pokemonDetails.color, flex: 1}}>
                <View testID={"HeaderButtons"} style={styles.headerButtonContainer}>
                    <View style={{flex:1, alignItems:'flex-start'}}>
                        <BackButton/>
                    </View>
                    <View style={{flex:1, alignItems:'flex-end'}}>
                    { isCaughted  ?
                        <StarButton action={()=>toggleFav()} boolean={isFavourite}/>
                        :
                        <View></View>
                    }
                    </View>
                </View>
                <View testID={"HeaderText"} style={styles.headerTextContainer}>
                    <View style={{flex:1, alignItems:'flex-start', left:20}}>
                        <Text style={{fontSize:23, color:'white'}}>{pokemonDetails.name}</Text>
                    </View>
                    <View style={{flex:1, alignItems:'flex-end', right:20}}>
                        {Math.floor(id/100) == 0 ? (Math.floor(id/10) == 0 ? <Text style={{color:'white'}}>#00{id}</Text> : <Text style={{color:'white'}}>#0{id}</Text>) : <Text style={{color:'white'}}>#{id}</Text>}
                    </View>
                </View>
                <View testID={"HeaderTypeAndGenera"} style={styles.headerTypeContainer}>
                    <FlatList
                        data = {pokemonDetails.type}
                        renderItem = {renderItem}
                        keyExtractor={item=>item.slot.toString()}
                        horizontal={true}
                        style={{flex:1}}
                    />
                    <View style={{flex:0.8, alignItems:'flex-end', right:10 }}>
                        <Text style={{color:'white'}}>{pokemonDetails.genera}</Text>
                    </View>
                </View>
                <View testID={"Body"} style={{backgroundColor: pokemonDetails.color == 'white' ? 'gray' : pokemonDetails.color, flex: 1, alignItems:'center'}}>
                    <View testID={"Image"}  style={{position:'absolute'}}>
                        <ImageBackground
                            source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ id +'.png'}} 
                            style={{width: 160, height: 160}}
                            imageStyle={{width: 160, height: 160}}
                            onLoadEnd={() =>  setImageLoading(false)}
                        >
                            {imageloading && <ActivityIndicator size="small" color={"orange"} style={{width: 50, height: 50}}/>}
                        </ImageBackground>
                    </View>
                    
                    <View testID="detailBodyContainer" style={styles.detailBodyContainer}>
                        <View testID="header" style={{paddingTop:10}}>
                            <Text style={{fontSize:20}}>About</Text>
                        </View>
                        <View testID="info" style={{marginTop:10}}>
                            <Text>{pokemonDetails.info}</Text>
                        </View>
                        <View testID="heightWeight" style={styles.shadowContainer}>
                            <View  testID="height" style={styles.heightDiv}>
                                <Text>Height:</Text>
                                <Text>{pokemonDetails.height/10} m</Text>
                            </View>
                            <View  testID="Weight" style={styles.weightDiv}>
                                <Text>Weight:</Text>
                                <Text>{pokemonDetails.weight/10} kg</Text>
                            </View>
                        </View>
                        <View testID={"HeaderTypeAndGenera"} style={styles.headerTypeContainer}>
                            {/*<View style={{flex:0.8, alignItems:'flex-end', right:10 }}>
                                <Text>EggGroups:</Text>
                            </View>
                            <FlatList
                                data = {pokemonDetails.eggGroups}
                                renderItem = {renderEggGroups}
                                keyExtractor={item=>item.name}
                                horizontal={true}
                                style={{flex:1}}
                            />*/}
                        </View>
                    </View>
                    
                </View>
                { isCaughted  ?
                    <PokeButton action={()=>releasePokemonByID()} colour={'mediumseagreen'} text={"Release"}/>
                    :
                    <PokeButton action={()=>catchPokemonByID()} colour={'royalblue'} text={"Catch"}/>
                }
            
            </View>
        }
        </> 
        
    )
}

export default DetailScreen

const styles = StyleSheet.create({
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
    headerTextContainer:{
        width:Dimensions.get('window').width, 
        height: 60,
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
    detailBodyContainer:{
        backgroundColor:'white',
        width: window.width, 
        height: window.height/1.2, 
        zIndex:-2,
        borderTopRightRadius:40, 
        borderTopLeftRadius:40,
        marginTop:'40%',
        //justifyContent:'center',
        alignItems:'center',
    },
    shadowContainer:{
        width:Dimensions.get('window').width/1.2, 
        borderRadius:10, 
        height:60, 
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        flexDirection:'row',
        marginTop:10 ,  
    },
    heightDiv:{
        flex:1, alignItems:'flex-start', justifyContent:'center', alignItems:'center'
    },
    weightDiv:{
        flex:1, alignItems:'flex-end', justifyContent:'center', alignItems:'center'
    }
  });