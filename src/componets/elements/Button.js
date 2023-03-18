import React, {useEffect} from 'react';
import {StyleSheet, Text, View, BackHandler} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {buttonColor, colors, rgbaColor} from '../../constants/AppStyles';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import AppConstants from '../../constants/AppConstants';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Button = ({
  rippleColor = buttonColor.PRIMARY,
  onPress = () => {},
  type = 'default',
  title = '',
  color = 'white',
  addonOutlineStyle = {},
  addonOutlineTextStyle = {},
  addonPrimaryStyle = {},
  addonPrimaryTextStyle = {},
  addonTextContainerStyle = {},
  addonTextStyle = {},
  antIcon = false,
  backHandler = false,
}) => {
  useEffect(() => {
    if (backHandler) {
      BackHandler.addEventListener('hardwareBackPress', () => {
        onPress();
        return true;
      });
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', () => {
          onPress();
          return true;
        });
      };
    }
  }, []);

  if (type === 'outline')
    return (
      <Ripple
        rippleColor={rippleColor}
        style={[styles.outline, addonOutlineStyle]}
        onPress={onPress}>
        <Text style={[styles.outlineText, addonOutlineTextStyle]}>{title}</Text>
      </Ripple>
    );

  return type === 'text' ? (
    <Ripple
      rippleColor={rippleColor}
      style={[styles.textButton, addonTextContainerStyle]}
      onPress={onPress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            ...styles.text,
            color: color == 'primary' ? buttonColor.PRIMARY : buttonColor.TEXT,
            ...addonTextStyle,
          }}>
          {title}
        </Text>
        {antIcon && (
          <AntIcon
            style={{marginLeft: 2}}
            name="arrowright"
            size={15}
            color={buttonColor.PRIMARY}
          />
        )}
      </View>
    </Ripple>
  ) : (
    <Ripple
      rippleColor={rippleColor}
      rippleDuration={700}
      onPress={onPress}
      style={[styles.button, addonPrimaryStyle]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[styles.text, addonPrimaryTextStyle]}>{title}</Text>
        {antIcon && (
          <AntIcon
            style={{marginLeft: 2}}
            name="arrowright"
            size={10}
            color="#ffffff"
          />
        )}
      </View>
    </Ripple>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: responsiveWidth(2),
    elevation: 1,
    backgroundColor: buttonColor.BUTTON,
  },
  outline: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: responsiveWidth(2),
    elevation: 0,
    borderWidth: 1,
    borderColor: buttonColor.OUTLINE,
  },
  textButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  text: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    textTransform: 'uppercase',
  },
  outlineText: {
    color: buttonColor.OUTLINE,
    textTransform: 'uppercase',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingHorizontal: 10,
  },
});
