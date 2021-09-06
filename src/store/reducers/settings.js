import { GET_THEME_COLOR } from '../actions/settings'

const initialState = {
    color: 'white'
}

export default (state = initialState, action) =>{
    const { type, settings } = action

    switch (type){
        case GET_THEME_COLOR: {
            return{
                ...state,
                color: settings,
            }
        }
        default:
            return state;
    }
}