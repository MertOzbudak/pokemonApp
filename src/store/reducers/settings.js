import { GET_THEME_COLOR } from '../actions/settings'

const initialState = {
    color: 'white'
}

export default (state = initialState, action) =>{
    const { type, settings } = action

    switch (type){
        case GET_THEME_COLOR: {
            let themeColor = settings.theme ? 'black' : 'white'
            state.color = themeColor

            return{
                ...state,
                color: state.color,
            }
        }
        default:
            return state;
    }
}