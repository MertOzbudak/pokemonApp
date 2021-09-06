export const CATCH_POKEMON = 'CATCH_POKEMON'
export const RELEASE_POKEMON = 'RELEASE_POKEMON'
export const ADD_FAV_POKEMON = 'ADD_FAV_POKEMON'
export const DELETE_FAV_POKEMON = 'DELETE_FAV_POKEMON'

export const catchPokemon = (pokemon, id, url) => {
    return {type: CATCH_POKEMON, pokeball: {name: pokemon, id: id, url: url}}
}

export const releasePokemon = (id) => {
    return {type: RELEASE_POKEMON, pokeball: {id: id}}
}

export const addFavouriteCaughtPokemon = (id) => {
    return {type: ADD_FAV_POKEMON, pokeball: {id: id}}
}

export const deleteFavouriteCaughtPokemon = (id) => {
    return {type: DELETE_FAV_POKEMON, pokeball: {id: id}}
}