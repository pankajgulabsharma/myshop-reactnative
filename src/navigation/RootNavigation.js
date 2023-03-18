import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {navigationRef} from './NavigatorService';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="AuthNavigator">
        <Stack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
