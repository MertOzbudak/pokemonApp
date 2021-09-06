import React from 'react';
import {Image, StyleSheet } from 'react-native';
import AppLogo from '../../assets/pokedex.png';

export default function Logo() {

      return (
        <Image
            style={styles.logo}
            source={AppLogo}
        />
      );
}

const styles = StyleSheet.create({
    logo:{
          width: 120, height: 45, resizeMode:'stretch'
    }
});