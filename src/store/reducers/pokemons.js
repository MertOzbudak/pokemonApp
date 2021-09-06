import { colorPicker } from '../../utils/helper'

const initialState = {
    pokemons: [],
    details: {
        name:'', 
        color:'',
        height:'',
        weight:'',
        genera:'',
        info:'',
        type:'',
        url: '',
        eggGroups:[],
    },
    caughtPokemons:[]
}

export default (state = initialState, action) =>{
    const { 
        type, 
        payload, 
        other 
    } = action
    
    switch (type){
        case 'GET_POKEMONS': {
            return{
                ...state,
                pokemons: payload.results,
                count: payload.count
            }
        }
        case 'GET_POKEMON_DETAILS': {
           if( payload  != "Not Found" ){ 
            state.details.name = payload.names.filter(it => it.language.name == 'en').map(it=>it.name)[0]
            state.details.color = colorPicker(payload.color.name)
            state.details.genera = payload.genera.filter(it => it.language.name == 'en').map(it=>it.genus)[0]
            state.details.eggGroups = payload .egg_groups
            state.details.info = payload.flavor_text_entries.filter(it => it.version.name == 'emerald').map(it=>it.flavor_text)[0]
            state.details.url = payload.varieties.map(item=>item.pokemon.url)[0]
            state.details.type = other.types
            state.details.height = other.height
            state.details.weight = other.weight
        }else{
            state.details.type = other.types
            state.details.name = other.name
            state.details.height = other.height
            state.details.weight = other.weight
            state.details.info = "There is not much information about"
            state.details.color = colorPicker('mavi')
        }
            return{
                ...state,
                details: state.details,
            }
        }
        default:
            return state;
    }
}