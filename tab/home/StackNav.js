
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MenuScreen from '../components/MenuScreen';

const Stack = createNativeStackNavigator();
Stack.initialRouteName = 'HomeScreen'

export default function StackNav(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              navigation={Stack}
            />
            <Stack.Screen 
              name="MenuScreen" 
              component={MenuScreen} 
              navigation={Stack}
              options={{ headerShown: true, headerTintColor: 'red', headerTitle:"" }}
            />
        </Stack.Navigator>);
  
  }