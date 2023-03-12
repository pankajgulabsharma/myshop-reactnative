import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {colors} from '../../../constants/AppStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Textinput} from '../../elements';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const SearchInput = ({
  serchContainer = {},
  onChangeText = {},
  placeholder = 'Search...',
  value,
  inputstyle = {},
  iconLeftName = 'search',
  iconLeftSize = 25,
  iconLeftColor = colors.grey4,
  iconRightName = 'visibility',
  isIconRight = false,
  iconRightSize = 25,
  iconRightColor = colors.skyBlue,
  iconRightPress = {},
}) => {
  return (
    <View style={[styles.section, serchContainer]}>
      {iconLeftName ? (
        <MaterialIcons
          name={iconLeftName}
          size={iconLeftSize}
          color={iconLeftColor}
        />
      ) : null}
      <Textinput
        TextInputStyle={[styles.input, inputstyle]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={styles.placeholdertextcolor}
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

export default SearchInput;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey1,
    paddingHorizontal: responsiveWidth(2),
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
    color: colors.black2,
    fontWeight: 'bold',
  },
});
