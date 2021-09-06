import React, { useEffect, useState } from 'react';
import {Platform, Dimensions, Switch } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux';
import { getThemeColor } from '../store/actions/settings';
import DetailScreen from '../screens/DetailScreen';
import BagScreen from '../screens/BagScreen';
import PokedexScreen from '../screens/PokedexScreen';
import Logo from '../components/Logo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const themeColor = useSelector((state) => state.Settings.color);
    
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let type;

                    if (route.name === 'Pokedex') {
                        iconName = 'pokeball';
                        type = 'material-community';
                    } else if (route.name === 'Bag') {
                        iconName = 'backpack';
                        type = 'material';
                    }

                    return <Icon name={iconName} size={20} color={color} type={type}/>;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { backgroundColor: themeColor }
            })}
        >
            <Tab.Screen name="Pokedex" component={PokedexScreen} options={{header: () => null}}/>
            <Tab.Screen name="Bag" component={BagScreen} options={{header: () => null}}/>
        </Tab.Navigator>
    );
}

const RootNavigator = () => {
    const themeColor = useSelector((state) => state.Settings.color);
    const dispatch = useDispatch();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        const getColor = async () => {
            await dispatch(getThemeColor(isEnabled));
        };
        getColor();
    },[isEnabled]);

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"HomeScreen"} 
                screenOptions={{ 
                    headerTintColor: 'white',
                }}
            >
                <Stack.Screen 
                    name={"HomeScreen"}
                    component={TabNavigation}
                    headerMode="none"
                    options={{
                        headerTitle: () => <Logo /> ,
                        headerStyle: {backgroundColor: themeColor},
                        headerTitleStyle: { color:'gold', width: Dimensions.get('window').width/1.1, },
                        headerRight: () => (
                            <Switch
                                trackColor={{ false: "lightgrey", true: "tomato" }}
                                thumbColor={isEnabled ? "lightgrey" : "gray"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        ),
                    }}
                />

                <Stack.Screen 
                    name={"DetailScreen"}
                    component={DetailScreen}
                    options={{header: () => null}}
                />  
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;