import React from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import CapsulView from '../components/CapsulView';

export default function GeneraView({data, genera}) {

    const renderItem = ({ item }) =>  {return <CapsulView item={item.type} color={'white'} />};  

    return (
        <View style={styles.container}>
            <FlatList
                data = {data}
                renderItem = {renderItem}
                keyExtractor={item=>item.slot.toString()}
                horizontal={true}
                style={{flex:1}}
            />
            <View style={styles.divOne}>
                <Text style={{color:'white'}}>{genera}</Text>
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
        flex:0.8, alignItems:'flex-end', right:10 
    },
});
