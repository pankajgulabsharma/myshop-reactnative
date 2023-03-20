import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import ScreenNames from '../constants/ScreenNames';
import BottomBarNavigation from './BottomBarNavigator';

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  const screenOptions = {
    headerShadowVisible: true,
    headerTitleAlign: 'center',
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.BottomBarNavigator}
        component={BottomBarNavigation}
        options={{...screenOptions, headerShown: false}}
      />
    </Stack.Navigator>
  );
}
