import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= {'Home'} >
        <Stack.Screen 
          name="Login" 
          component={ Login } 
          options={{ headerShown: false }} />
        <Stack.Screen 
          name="Register" 
          component={ Register } 
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
