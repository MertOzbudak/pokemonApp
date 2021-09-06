import { CATCH_POKEMON, RELEASE_POKEMON, ADD_FAV_POKEMON, DELETE_FAV_POKEMON } from '../actions/bag'

const initialState = {
    pokemon: {name:'', id:'', url:''},
    caughtPokemons: [],
    favPokemons: [],
}

export default (state = initialState, action) => {

    switch (action.type){
        case CATCH_POKEMON: {
            const caughtPokemon = action.pokeball;
            state.pokemon.name = caughtPokemon.name
            state.pokemon.id = caughtPokemon.id
            state.pokemon.url = caughtPokemon.url

            if(state.caughtPokemons.find(item=>item.id == state.pokemon.id)){
                //already caught
                return {
                    ...state,
                    message: "Already Caught"
                }
            }else{
                state.caughtPokemons.push(state.pokemon)
                return {
                    ...state,
                    pokemon: {...state.pokemon},
                    caughtPokemons: state.caughtPokemons,
                    message: "Got it!"
                }
            }

        }
        case RELEASE_POKEMON: {
            const caughtPokemon = action.pokeball;
            state.pokemon.id = caughtPokemon.id
            
            if(state.caughtPokemons.find(item=>item.id == state.pokemon.id)){
                //find item index to remove
                let index = state.caughtPokemons.findIndex(item=>item.id == state.pokemon.id)
                state.caughtPokemons.splice(index, 1);
                if(state.favPokemons.find(item=>item.id == state.pokemon.id)){
                    let ind = state.favPokemons.findIndex(item=>item.id == state.pokemon.id)
                    state.favPokemons.splice(ind, 1);
                }
                return {
                    ...state,
                    pokemon: {...state.pokemon},
                    caughtPokemons: state.caughtPokemons,
                    message: "Got it!"
                }
            }else{
                //already release
                return{
                    ...state,
                    message: "Not Found"
                }
            }
            
        }
        case ADD_FAV_POKEMON: {
            const favPokemon = action.pokeball;
            state.pokemon.id = favPokemon.id;
            
            if(state.caughtPokemons.find(item=>item.id == state.pokemon.id)){
                if(state.favPokemons.find(item=>item.id == state.pokemon.id)){
                    //already caught
                    return {
                        ...state,
                        message: "Already Caught"
                    }
                }else{
                    state.favPokemons.push(state.pokemon)
                    return {
                        ...state,
                        pokemon: {...state.pokemon},
                        favPokemons: state.favPokemons,
                        message: "Got it!"
                    }
                }
            }
        }
        case DELETE_FAV_POKEMON: {
            const favPokemon = action.pokeball;
            state.pokemon.id = favPokemon.id
            
            if(state.favPokemons.find(item=>item.id == state.pokemon.id)){
                //find item index to remove
                let index = state.favPokemons.findIndex(item=>item.id == state.pokemon.id)
                state.favPokemons.splice(index, 1);

                return {
                    ...state,
                    pokemon: {...state.pokemon},
                    favPokemon: state.favPokemons,
                    message: "Got it!"
                }
            }else{
                //already release
                return{
                    ...state,
                    message: "Not Found"
                }
            }
        }
        default:
            return state;
    }
}