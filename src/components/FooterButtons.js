import React from 'react';
import {View, Dimensions, StyleSheet, Text } from 'react-native';
import ArrowButton from '../components/ArrowButton';

export default function FooterButtons({next, prev, offset, length}) {
    
      return (
        <View style={styles.container}>
            <View style={styles.left}>
                <ArrowButton 
                    direction={"left"} 
                    disability={offset == 0 ? true : false} 
                    action={()=>prev()}
                />
            </View>
            <View>
                <Text style={styles.text}>{offset/20+1}</Text>
            </View>
            <View style={styles.right}>
                <ArrowButton 
                    direction={"right"} 
                    disability={offset < length-20 ? false : true} 
                    action={()=>next()}
                />
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width, 
        height: 60,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    left:{
        flex:1, alignItems:'flex-start', left:10
    },
    right:{
        flex:1, alignItems:'flex-end', right:10
    },
    text:{
        color: 'gray'
    }
});
