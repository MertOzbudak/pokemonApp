import React from 'react';
import {View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

export default function StarButton({ action, boolean }) {
      return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => action()}>
                {boolean ?
                    <Icon name={"star"} size={25} color={"gold"} type="material-community"/>
                    :
                    <Icon name={"star-outline"} size={25} color={"gold"} type="material-community"/>
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


