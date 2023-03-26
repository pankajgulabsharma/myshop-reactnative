import React from 'react';
import {View} from 'react-native';
import SingleCart from './SingleCart';
import styles from './styles';

const Cart = () => {
  return (
    <View style={styles.mainContainer}>
      <SingleCart />
    </View>
  );
};

export default Cart;
