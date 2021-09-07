import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

export default function ErrorView({text}) {
    
     const styles = StyleSheet.create({
        container:{
            justifyContent:'center', alignItems:'center',flex: 1,
        },
        activityIndicatorStyle:{
            width: 50, height: 50
        },
      });

      return (
        <View style={styles.container}>
            <Icon name={"warning"} size={50} color={"red"} type={"antdesign"}/>
            <Text style={{color:'tomato', marginTop:30}}>{text}</Text>
        </View>
      );
}

