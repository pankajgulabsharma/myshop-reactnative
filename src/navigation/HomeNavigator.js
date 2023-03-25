import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from '../constants/ScreenNames';
import Home from '../screens/home';
import Search from '../screens/search';

const Stack = createNativeStackNavigator();
export default function HomeNavigator() {
  const screenOptions = {
    headerShadowVisible: true,
    headerTitleAlign: 'center',
  };
  return (
    <Stack.Navigator initialRouteName={ScreenNames.Home}>
      <Stack.Screen
        name={ScreenNames.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenNames.Search}
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
