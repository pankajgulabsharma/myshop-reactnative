import React, {useRef, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {colors} from '../../../constants/AppStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Textinput} from '../../elements';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const CustomInput = ({
  focus = false,
  customInputContainer = {},
  onChangeText = {},
  placeholder = 'Search...',
  value,
  keyboardType = 'default',
  inputstyle = {},
  iconLeftName = 'search',
  iconLeftSize = 25,
  iconLeftColor = colors.grey4,
  iconRightName = 'visibility',
  isIconRight = false,
  iconRightSize = 25,
  iconRightColor = colors.grey4,
  iconRightPress = () => {},
  secureTextEntry = false,
}) => {
  const userInputRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      userInputRef.current?.focus();
    }, 500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [userInputRef]);

  return (
    <View style={[styles.section, customInputContainer]}>
      {iconLeftName ? (
        <MaterialIcons
          name={iconLeftName}
          size={iconLeftSize}
          color={iconLeftColor}
        />
      ) : null}
      <Textinput
        ref={focus ? userInputRef : null}
        keyboardType={keyboardType}
        TextInputStyle={[styles.input, inputstyle]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={styles.placeholdertextcolor}
        secureTextEntry={secureTextEntry}
        lineColorAndroid="transparent"
      />

      {iconRightName && isIconRight ? (
        <Pressable onPress={iconRightPress}>
          <MaterialIcons
            name={iconRightName}
            size={iconRightSize}
            color={iconRightColor}
          />
        </Pressable>
      ) : null}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2),
    backgroundColor: colors.white,
    // borderWidth: 1,
    // paddingVertical: responsiveHeight(1.5),
  },
  input: {
    flex: 1,
    // borderWidth: responsiveWidth(0.3),
    height: 40,
    color: colors.black2,
    fontWeight: 'bold',
  },
  placeholdertextcolor: {
    color: colors.grey2,
    fontWeight: 'bold',
  },
});
