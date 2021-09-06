import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import PokeIcon from '../../assets/poke.png';

export default function EmptyBagView({text, themeColor}) {
    
     const styles = StyleSheet.create({
        container:{
            justifyContent:'center', alignItems:'center',flex: 1, backgroundColor: themeColor == 'black' ? '#333231': 'rgb(245, 245, 240)'
        },
        activityIndicatorStyle:{
            width: 50, height: 50
        },
        logo:{
            width: 120, height: 120, resizeMode:'stretch', marginBottom:20, opacity:themeColor == 'black' ? 0.2 : 0.8,
        }
      });

      return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={PokeIcon}
            />
            <Text style={{color:'tomato'}}>{text}</Text>
            
        </View>
      );
}

