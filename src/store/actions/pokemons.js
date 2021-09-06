import service from '../services/pokemons';
export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMONS_DETAILS = 'GET_POKEMON_DETAILS'

export const getPokemons = (offset) => async(dispatch) =>{
    try{
        const payload = await service.getPokemons(offset)
        await dispatch({
            type: GET_POKEMONS,
            payload
        });

    }catch(error){
        //console.log("ERROR AT ACTIONS POKEMONS.JS ",error);
        throw error;
    }
}

export const getPokemonDetails = (id) => async(dispatch) =>{
    try{
        let payload = await service.getPokemonDetailsById(id)
        let other = await service.getPokemonOtherDetailsById(id)
        await dispatch({
            type: GET_POKEMONS_DETAILS,
            payload,
            other,
        });

    }catch(error){
        //console.log("ERROR AT ACTIONS POKEMONS DETAILS ",error);
        throw error;
    }
}