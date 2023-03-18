import {StyleSheet, TextInput, View} from 'react-native';
import React, {forwardRef} from 'react';

const Textinput = forwardRef(
  (
    {
      onChangeText = {},
      placeholder = 'sdfsdf',
      placeholderTextColor = {},
      value,
      keyboardType = 'default',
      TextInputStyle = {},
      isCapitalized,
      onFocus,
      onBlur,
      secureTextEntry = false,
      disabled = false,
      maxLength,
    },
    ref,
  ) => {
    return (
      <TextInput
        ref={ref}
        style={[styles.input, TextInputStyle]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor.color}
        keyboardType={keyboardType}
        autoCapitalize={isCapitalized ? 'characters' : 'none'}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        editable={!disabled}
        lineColorAndroid="transparent"
        selectTextOnFocus={!disabled}
      />
    );
  },
);

export default Textinput;

const styles = StyleSheet.create({});
