export const CATCH_POKEMON = 'CATCH_POKEMON'
export const RELEASE_POKEMON = 'RELEASE_POKEMON'
export const ADD_FAV_POKEMON = 'ADD_FAV_POKEMON'
export const DELETE_FAV_POKEMON = 'DELETE_FAV_POKEMON'
export const FETCH_DATA_FROM_ASYNC = 'FETCH_DATA_FROM_ASYNC'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAsyncData, removeAsyncData } from '../../utils/validation';

//try catch
export const catchPokemon = (pokemon, id, url) => async (dispatch)  => {
    //setAsyncData('pokeballs', pokemon);
    await dispatch({ type: CATCH_POKEMON, pokeball: {name: pokemon, id: id, url: url}})
}

export const releasePokemon = (id) => async(dispatch) => {
    await dispatch({type: RELEASE_POKEMON, pokeball: {id: id}})
}

export const addFavouriteCaughtPokemon = (id) => async(dispatch) => {
    await dispatch({type: ADD_FAV_POKEMON, pokeball: {id: id}})
}

export const deleteFavouriteCaughtPokemon = (id) => async(dispatch) => {
    await dispatch({type: DELETE_FAV_POKEMON, pokeball: {id: id}})
}

export const fetchDataFromAsync = () => async (dispatch)  => {
    var pokeballs = JSON.parse(await AsyncStorage.getItem('pokeballs'));
    var favourites = JSON.parse(await AsyncStorage.getItem('favourites'));
    await dispatch({type: FETCH_DATA_FROM_ASYNC, pokeball: pokeballs, favourites:favourites})
}