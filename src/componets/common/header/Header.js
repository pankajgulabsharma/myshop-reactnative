import React from 'react';
import {View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppConstants from '../../../constants/AppConstants';
import {buttonColor} from '../../../constants/AppStyles';
import {Text} from '../../elements';
import styles from './styles';

const Header = ({
  iconLeftName = 'sort',
  iconLeftSize = 30,
  iconLeftColor = buttonColor.PRIMARY,
  iconLeftonPress = () => {},
  iconRightName = 'notifications',
  iconRightSize = 30,
  iconRightColor = buttonColor.PRIMARY,
  iconRightonPress = () => {},
  appName = AppConstants.appName,
  appNameStyle = {},
}) => {
  return (
    <View style={styles.container}>
      {iconLeftName ? (
        iconLeftName === 'empty' ? (
          <View style={{marginLeft: responsiveWidth(15)}} />
        ) : (
          <Ripple
            rippleColor={buttonColor.PRIMARY}
            onPress={iconLeftonPress}
            style={styles.icon}>
            <MaterialIcons
              name={iconLeftName}
              size={iconLeftSize}
              color={iconLeftColor}
            />
          </Ripple>
        )
      ) : null}
      {appName ? (
        <Text TextStyle={[styles.title, appNameStyle]}>{appName}</Text>
      ) : null}
      {iconRightName ? (
        iconRightName === 'empty' ? (
          <View style={{marginLeft: responsiveWidth(15)}} />
        ) : (
          <Ripple
            rippleColor={buttonColor.PRIMARY}
            onPress={iconRightonPress}
            style={styles.icon}>
            <MaterialIcons
              name={iconRightName}
              size={iconRightSize}
              color={iconRightColor}
            />
          </Ripple>
        )
      ) : null}
    </View>
  );
};

export default Header;
