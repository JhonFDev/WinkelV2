import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ProfileScreen from '../screens/account/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='homescreen' screenOptions={{headerShown:false}}>
            <Stack.Screen name='welcomescreen' component={WelcomeScreen}/>
            <Stack.Screen name='homescreen' component={HomeScreen}/>
            <Stack.Screen name='loginscreen' component={LoginScreen}/>
            <Stack.Screen name='registercreen' component={RegisterScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})