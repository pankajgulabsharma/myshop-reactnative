import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ScreenNames from '../constants/ScreenNames';
import Login from '../screens/login';
import Signup from '../screens/signup';

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.Login}>
      <Stack.Screen
        name={ScreenNames.Login}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenNames.Signup}
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
