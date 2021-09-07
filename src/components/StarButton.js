import React from 'react';
import {View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

export default function StarButton({ action, boolean, backgroundColor }) {
     
    let iconColor = backgroundColor == '#ffe066' ? 'tomato' : 'gold'

      return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => action()}>
                {boolean ?
                    <Icon name={"star"} size={25} color={iconColor} type="material-community"/>
                    :
                    <Icon name={"star-outline"} size={25} color={iconColor} type="material-community"/>
                }
            </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        width:50,
        height:50, 
        justifyContent:'center', 
        borderRadius:25
    }
});


