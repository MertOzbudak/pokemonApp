import React from 'react';
import {View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { isStringEmpty } from '../utils/validation';

export default function ArrowButton({action, direction, disability}) {
    const isDisable = isStringEmpty(disability) ? false : disability
    const color = isDisable ? 'gray' : 'tomato'
    
    const styles = StyleSheet.create({
      container:{
        borderWidth:1, borderColor:color, width:50,height:50, justifyContent:'center', borderRadius:25
      }
    });
    
      return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>action()} disabled={isDisable}>
                <Icon name={"arrow-"+direction} size={25} color={color} type="material-community"/>
            </TouchableOpacity>
        </View>
      );
}

