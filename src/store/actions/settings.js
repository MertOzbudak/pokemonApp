export const GET_THEME_COLOR = 'GET_THEME_COLOR'

export const getThemeColor = (isDarkMode) => {
    return {type: GET_THEME_COLOR, settings: {theme: isDarkMode}}
}
