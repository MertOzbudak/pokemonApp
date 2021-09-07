import React, { useState } from 'react';
import {View,  ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
import { IMAGE_URL, PNG } from '../constants/constant';

export default function PokemonImage({id , imageloading, setImageLoading}) {

      return (
        <View testID={"Image"} style={styles.container}>
          <ImageBackground
              source={{ uri: IMAGE_URL + id + PNG}} 
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
  container:{
    position:'absolute'
  },
  imageStyle:{
    width: 160, height: 160
  },
  activityIndicatorStyle:{
    width: 50, height: 50
  },
});