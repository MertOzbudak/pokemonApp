import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function CapsulView({color, item}) {

    const backgroundColor = color =='white' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'
    
    const styles = StyleSheet.create({
      container:{
        marginLeft:5, 
        width:80, 
        height:30, 
        borderColor:'white', 
        borderWidth:0.5, 
        backgroundColor: backgroundColor, 
        borderRadius:10, 
        justifyContent:'center', 
        alignItems:'center'
      }
    });

    return (
      <View style={styles.container}>
          <Text style={{color:color}}>{item.name}</Text>
      </View>
    );
}

