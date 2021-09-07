import React from 'react';
import {View, Text } from 'react-native';

export default function AboutView({info}) {

    return (
        <View style={{alignItems:'center'}}>
            <View testID="header" style={{paddingTop:10}}>
                <Text style={{fontSize:20}}>About</Text>
            </View>
            <View testID="info" style={{marginTop:10}}>
                <Text>{info}</Text>
            </View>
        </View>
    );
}

