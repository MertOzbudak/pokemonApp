import React from 'react';
import {View, StyleSheet, Dimensions } from 'react-native';
import ShadowContainer from '../components/ShadowContainer';
import EggGroupView from '../components/EggGroupView';
import AboutView from '../components/AboutView';

export default function DetailBodyView({info, weight, height, eggGroups}) {

    return (
        <View testID="detailBodyContainer" style={styles.detailBodyContainer}>
            <AboutView
                info={info}
            />
            <ShadowContainer
                testID="heightWeight"
                weight={weight}
                height={height}
            />
            <EggGroupView
                testID="eggGroup"
                eggGroups={eggGroups}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    detailBodyContainer:{
        backgroundColor:'white',
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height/1.6, 
        zIndex:-2,
        borderTopRightRadius:40, 
        borderTopLeftRadius:40,
        marginTop:'40%',
        alignItems:'center',
    },
});
