import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function PokeButton({ action, colour, text }) {

    const styles = StyleSheet.create({
        container:{
            position: 'absolute', bottom:20, alignItems:'center', left:10,right:10,
        },
        button:{
            width:150,height:50,backgroundColor: colour, borderRadius:25,justifyContent:'center'
        },
        buttonText:{
            textAlign:'center',color:'white'
        }
    });

      return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => action()}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View> 
      );
}

