import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const Textinput = ({
  onChangeText = {},
  placeholder = 'sdfsdf',
  placeholderTextColor = {},
  value,
  keyboardType = 'default',
  TextInputStyle = {},
  isCapitalized,
  onFocus,
  onBlur,
  disabled = false,
  maxLength,
}) => {
  return (
    <TextInput
      style={[styles.input, TextInputStyle]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor.color}
      keyboardType={keyboardType}
      autoCapitalize={isCapitalized ? 'characters' : 'none'}
      onFocus={onFocus}
      onBlur={onBlur}
      maxLength={maxLength}
      editable={!disabled}
      lineColorAndroid="transparent"
      selectTextOnFocus={!disabled}
    />
  );
};

export default Textinput;

const styles = StyleSheet.create({});
