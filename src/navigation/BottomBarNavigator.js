import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {buttonColor} from '../constants/AppStyles';
import ScreenNames from '../constants/ScreenNames';
import Account from '../screens/account';
import Cart from '../screens/cart';
import Categories from '../screens/categories';
import Home from '../screens/home';

const Tab = createBottomTabNavigator();

export default function BottomBarNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.Home}
      screenOptions={{
        tabBarActiveTintColor: buttonColor.PRIMARY,
        tabBarInactiveTintColor: buttonColor.PRIMARY,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={ScreenNames.Home}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (focused) {
              return <Ionicons name="home-sharp" color={color} size={size} />;
            } else {
              return <Ionicons name="home-outline" color={color} size={size} />;
            }
          },
        }}
      />
      <Tab.Screen
        name={ScreenNames.Categories}
        component={Categories}
        options={{
          tabBarLabelStyle: {
            paddingBottom: responsiveHeight(1.3),
            fontSize: responsiveFontSize(1.4),
          },

          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                resizeMode="contain"
                source={
                  focused
                    ? require('../assets/images/rectanglegrid_2x2_fill.png')
                    : require('../assets/images/rectanglegrid_2x2.png')
                }
                style={{width: 27, height: 27}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={ScreenNames.Cart}
        component={Cart}
        options={{
          tabBarLabelStyle: {
            paddingBottom: responsiveHeight(1.3),
            fontSize: responsiveFontSize(1.4),
          },
          tabBarIcon: ({focused, color, size}) => {
            if (focused) {
              return <Ionicons name="cart" color={color} size={size * 1.09} />;
            } else {
              return (
                <Ionicons
                  name="cart-outline"
                  color={color}
                  size={size * 1.09}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name={ScreenNames.Account}
        component={Account}
        options={{
          tabBarLabelStyle: {
            paddingBottom: responsiveHeight(1.3),
            fontSize: responsiveFontSize(1.4),
          },
          tabBarIcon: ({focused, color, size}) => {
            if (focused) {
              return <Ionicons name="person" color={color} size={size} />;
            } else {
              return (
                <Ionicons name="ios-person-outline" color={color} size={size} />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
