import React from 'react';
import {View, Text, StyleSheet, Dimensions } from 'react-native';

export default function HeaderInfoView({name, id}) {

    return (
        <View testID={"HeaderText"} style={styles.container}>
            <View style={styles.divOne}>
                <Text style={{fontSize:23, color:'white'}}>{name}</Text>
            </View>
            <View style={styles.divTwo}>
                {
                    Math.floor(id/100) == 0 ? 
                    
                        (
                            Math.floor(id/10) == 0 ? 
                            <Text style={{color:'white'}}>#00{id}</Text> 
                            : 
                            <Text style={{color:'white'}}>#0{id}</Text>
                        ) 
                    : 
                    <Text style={{color:'white'}}>#{id}</Text>
                }
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
    divOne:{
        flex:1, alignItems:'flex-start', left:20
    },
    divTwo:{
        flex:1, alignItems:'flex-end', right:20
    }
  });

