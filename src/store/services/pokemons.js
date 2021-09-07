import * as constants from '../../constants/constant';

const getPokemons = async(offset) =>{
    try{
       
       let response = await fetch(constants.serviceURL.GET_POKEMONS  + offset + constants.serviceURL.LIMIT);
   
       response =  response.status == constants.status.success ? await response.json() : constants.status.fail;
       
       return response

    }catch(error){
        //console.log("GET POKEMON SERVICE ERROR:", error);
        throw error;
    }
}

const getPokemonDetailsById = async(id) =>{
    try{
       
       let response = await fetch(constants.serviceURL.GET_POKEMON_DETAIL + id );
       
       response =  response.status == constants.status.success ? await response.json() : constants.status.fail;
       
       return response

    }catch(error){
        //console.log("GET POKEMON DETAIL SERVICE ERROR:", error);
        throw error;
    }
}

const getPokemonOtherDetailsById = async(id) =>{
    try{
       
       let response = await fetch(constants.serviceURL.GET_POKEMON_OTHER_DETAIL + id );

       response =  response.status == constants.status.success ? await response.json() : constants.status.fail;
       
       return response

    }catch(error){
        //console.log("GET POKEMON OTHER DETAIL SERVICE ERROR:", error);
        throw error;
    }
}

export default {
    getPokemons,
    getPokemonDetailsById,
    getPokemonOtherDetailsById
};
  