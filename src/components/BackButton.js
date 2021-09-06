import React from 'react';
import {View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'

export default function BackButton() {
    const navigation = useNavigation();

      return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name={"arrow-left"} size={25} color={"white"} type="material-community"/>
            </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
  container:{
      width:50,height:50, justifyContent:'center', borderRadius:25
  }
});