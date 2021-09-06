import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function LoadingView({text}) {
    
     const styles = StyleSheet.create({
        container:{
            justifyContent:'center', alignItems:'center',flex: 1
        },
        activityIndicatorStyle:{
            width: 50, height: 50
        }
      });

      return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={"orange"} style={styles.activityIndicatorStyle}/>
            <Text style={{color:'tomato'}}>{text}</Text>
        </View>
      );
}

