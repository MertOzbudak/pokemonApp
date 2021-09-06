export const CATCH_POKEMON = 'CATCH_POKEMON'
export const RELEASE_POKEMON = 'RELEASE_POKEMON'
export const ADD_FAV_POKEMON = 'ADD_FAV_POKEMON'
export const DELETE_FAV_POKEMON = 'DELETE_FAV_POKEMON'
export const FETCH_DATA_FROM_ASYNC = 'FETCH_DATA_FROM_ASYNC'

import AsyncStorage from '@react-native-async-storage/async-storage';

export const catchPokemon = (pokemon, id, url) => async (dispatch)  => {
    try{
        await dispatch({ type: CATCH_POKEMON, pokeball: {name: pokemon, id: id, url: url}})
    }catch(error){
        throw error
    }
}

export const releasePokemon = (id) => async(dispatch) => {
    try{
        await dispatch({type: RELEASE_POKEMON, pokeball: {id: id}})
    }catch(error){
        throw error
    }
}

export const addFavouriteCaughtPokemon = (id) => async(dispatch) => {
    try{
        await dispatch({type: ADD_FAV_POKEMON, pokeball: {id: id}})
    }catch(error){
        throw error
    }
    
}

export const deleteFavouriteCaughtPokemon = (id) => async(dispatch) => {
    try{
        await dispatch({type: DELETE_FAV_POKEMON, pokeball: {id: id}})
    }catch(error){
        throw error
    }
}

export const fetchDataFromAsync = () => async (dispatch)  => {
    try{
        var pokeballs = JSON.parse(await AsyncStorage.getItem('pokeballs'));
        var favourites = JSON.parse(await AsyncStorage.getItem('favourites'));
        await dispatch({type: FETCH_DATA_FROM_ASYNC, pokeball: pokeballs, favourites:favourites})
    }catch(error){
        throw error
    }
}