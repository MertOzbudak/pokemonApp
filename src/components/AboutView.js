import React from 'react';
import {View, Text } from 'react-native';
import * as constants from '../constants/constant';

export default function AboutView({info}) {

    return (
        <View style={{alignItems:'center'}}>
            <View testID="header" style={{paddingTop:10}}>
                <Text style={{fontSize:20}}>{constants.title.about}</Text>
            </View>
            <View testID="info" style={{marginTop:10}}>
                <Text>{info}</Text>
            </View>
        </View>
    );
}

