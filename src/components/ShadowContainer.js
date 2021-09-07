import React from 'react';
import {View, Text, StyleSheet, Dimensions } from 'react-native';

export default function ShadowContainer({height, weight}) {

    return (
    <View style={styles.shadowContainer}>
        <View testID="height" style={styles.heightDiv}>
            <Text>Height:</Text>
            <Text>{height/10} m</Text>
        </View>
        <View  testID="Weight" style={styles.weightDiv}>
            <Text>Weight:</Text>
            <Text>{weight/10} kg</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    shadowContainer:{
        width:Dimensions.get('window').width/1.2, 
        borderRadius:10, 
        height:60, 
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        flexDirection:'row',
        marginTop:10 ,  
    },
    heightDiv:{
        flex:1, alignItems:'flex-start', justifyContent:'center', alignItems:'center'
    },
    weightDiv:{
        flex:1, alignItems:'flex-end', justifyContent:'center', alignItems:'center'
    }
});
