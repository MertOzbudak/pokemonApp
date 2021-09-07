import service from '../services/pokemons';
export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMONS_DETAILS = 'GET_POKEMON_DETAILS'
import * as constants from '../../constants/constant';

export const getPokemons = (offset) => async(dispatch) =>{
    try{
        const payload = await service.getPokemons(offset)
        payload != constants.status.fail ?
        await dispatch({
            type: GET_POKEMONS,
            payload,
            hasError: false,
        })
        :
        await dispatch({
            type: GET_POKEMONS,
            hasError: true,
        })

    }catch(error){
        console.log("ERROR AT ACTIONS POKEMONS.JS ",error);
        throw error;
    }
}

export const getPokemonDetails = (id) => async(dispatch) =>{
    try{
        let payload = await service.getPokemonDetailsById(id)
        let other = await service.getPokemonOtherDetailsById(id)
        payload != constants.status.fail && other != constants.status.fail ?
            await dispatch({
                type: GET_POKEMONS_DETAILS,
                payload,
                other,
                hasError: false
            })
            :
            await dispatch({
                type: GET_POKEMONS_DETAILS,
                hasError: true,
            })
        

    }catch(error){
        console.log("ERROR AT ACTIONS POKEMONS DETAILS ",error);
        throw error;
    }
}