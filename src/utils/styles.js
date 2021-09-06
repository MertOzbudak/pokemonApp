import { StyleSheet, Dimensions } from 'react-native';

export const window = Dimensions.get('window');

export const ORANGE = 'tomato'
export const BLUE = '#068a9c' 
export const YELLOW = '#feed21' 
export const GRAY = '#dedfe4'
export const WHITE = '#FFF'

export default StyleSheet.create({
    //GENERAL
    container:{
        backgroundColor:'white', 
        flex: 1
    }
})