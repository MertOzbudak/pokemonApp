export const GET_THEME_COLOR = 'GET_THEME_COLOR'

export const getThemeColor = (isDarkMode) => async(dispatch)=> {
    let themeColor = isDarkMode ? 'black' : 'white'
    await dispatch({type: GET_THEME_COLOR, settings: themeColor})
}