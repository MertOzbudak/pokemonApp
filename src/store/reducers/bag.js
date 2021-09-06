import { CATCH_POKEMON, RELEASE_POKEMON, ADD_FAV_POKEMON, DELETE_FAV_POKEMON, FETCH_DATA_FROM_ASYNC } from '../actions/bag'
import { setAsyncData, removeAsyncData } from '../../utils/helper';

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
                setAsyncData('pokeballs', state.caughtPokemons)
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
                setAsyncData('pokeballs', state.caughtPokemons)
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
                    
                    setAsyncData('favourites', state.favPokemons)
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
                setAsyncData('favourites', state.favPokemons)
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
        case FETCH_DATA_FROM_ASYNC: {
            const pokemonsFromAsync = action.pokeball;
            const favPokemonsFromAsync = action.favourites;
           // state.caughtPokemons = [...pokemonsFromAsync]
            return{
                ...state,
                caughtPokemons: pokemonsFromAsync == null ? [] :[...pokemonsFromAsync],
                favPokemons: favPokemonsFromAsync == null || pokemonsFromAsync == null ? [] : [...favPokemonsFromAsync]
            }
            
        }
        default:
            return state;
    }
}