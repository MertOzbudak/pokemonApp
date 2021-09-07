import React, { useState } from 'react';
import {View,  ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';


export default function PokemonImage({id , imageloading, setImageLoading}) {

      return (
        <View testID={"Image"}  style={{position:'absolute'}}>
          <ImageBackground
              source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ id +'.png'}} 
              style={styles.imageStyle}
              imageStyle={styles.imageStyle}
              onLoadEnd={() =>  setImageLoading(false)}
          >
              {imageloading && <ActivityIndicator size="small" color={"orange"} style={styles.activityIndicatorStyle}/>}
          </ImageBackground>
        </View>
      );
}

const styles = StyleSheet.create({
  imageStyle:{
    width: 160, height: 160
  },
  activityIndicatorStyle:{
    width: 50, height: 50
  },
});