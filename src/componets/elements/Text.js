import {StyleSheet, Text as TextComp} from 'react-native';
import React from 'react';
import {colors} from '../../constants/AppStyles';

const Text = ({children, numberOfLines, TextStyle}) => {
  return (
    <TextComp numberOfLines={numberOfLines} style={[styles.text, TextStyle]}>
      {children}
    </TextComp>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    color: colors.black,
  },
});
