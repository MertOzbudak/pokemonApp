const ServiceURL = {
    GET_POKEMONS:'https://pokeapi.co/api/v2/pokemon?offset=',
    GET_POKEMON_DETAIL: 'https://pokeapi.co/api/v2/pokemon-species/',
    GET_POKEMON_OTHER_DETAIL: 'https://pokeapi.co/api/v2/pokemon/'
}

const getPokemons = async(offset) =>{
    try{
       
       let response = await fetch(ServiceURL.GET_POKEMONS+offset+"&limit=20");
   
       response =  response.status == 200 ? await response.json() : 404;
       
       return response

    }catch(error){
        //console.log("GET POKEMON SERVICE ERROR:", error);
        throw error;
    }
}

const getPokemonDetailsById = async(id) =>{
    try{
       
       let response = await fetch(ServiceURL.GET_POKEMON_DETAIL + id );
       
       response = response.status == 200 ? await response.json() : 404;
       
       return response

    }catch(error){
        //console.log("GET POKEMON DETAIL SERVICE ERROR:", error);
        throw error;
    }
}

const getPokemonOtherDetailsById = async(id) =>{
    try{
       
       let response = await fetch(ServiceURL.GET_POKEMON_OTHER_DETAIL + id );

       response = response.status == 200 ? await response.json() : 404;
       
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
  