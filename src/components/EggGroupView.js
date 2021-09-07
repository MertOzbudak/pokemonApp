import React from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import CapsulView from '../components/CapsulView';
import * as constants from '../constants/constant';

export default function EggGroupView({eggGroups}) {

    const renderEggGroups = ({ item }) =>  {return <CapsulView item={item} color={'black'} />};

    return (
        <View testID={"HeaderTypeAndGenera"} style={styles.container}>
            <View style={styles.divOne}>
                <Text>{constants.title.eggGroups}</Text>
            </View>
            <FlatList
                data = {eggGroups}
                renderItem = {renderEggGroups}
                keyExtractor={item=>item.name}
                horizontal={true}
                style={{flex:1}}
            />
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
    }
});
