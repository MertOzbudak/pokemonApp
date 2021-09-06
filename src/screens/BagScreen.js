import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from "react-native";
import {useSelector} from 'react-redux'
import PokemonCard from '../components/PokemonCard';

const BagScreen = () =>{
    const caughtPokemons = useSelector((state) => state.Bag.caughtPokemons);
    const favPokemons = useSelector((state) => state.Bag.favPokemons);
    const themeColor = useSelector((state) => state.Settings.color);
    const pokemon = useSelector((state) => state.Bag.pokemon);
    const mess = useSelector((state) => state.Bag.message);
    const renderItem = ({ item }) =>  <PokemonCard item = {item}/>;  

    /*useEffect(() => {
        const getAllPokemons = async () => {
            await dispatch(getPokemons());
        };
        getAllPokemons();
    },[]);*/

    return (
        <FlatList
            data = {caughtPokemons}
            renderItem = {renderItem}
            keyExtractor={item=>item.id}
            numColumns={2}
            style={{backgroundColor: themeColor == 'black' ? '#333231': 'white'}}
        />
    )
}

export default BagScreen