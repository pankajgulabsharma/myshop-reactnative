import React from 'react';
import {View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CachedImage, Text} from '../../../componets/elements';
import {buttonColor} from '../../../constants/AppStyles';
import styles from '../styles';

const SingleCart = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={{flex: 0.4}}>
        <CachedImage
          imageStyle={styles.image}
          imageURL={'https://reactnative.dev/img/tiny_logo.png'}
          resizeMode="stretch"
        />
      </View>
      <View
        style={{
          flex: 0.6,
          justifyContent: 'space-between',
          // alignItems: 'flex-end',
          padding: responsiveWidth(1.5),
          paddingLeft: responsiveWidth(5),
          // borderWidth: 1,
        }}>
        <View>
          <Text TextStyle={styles.boldText}>
            This is the main title of the product
          </Text>
          <Text TextStyle={styles.priceTextContainer}>
            Price: <Text TextStyle={styles.priceText}>$ 320</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ripple rippleColor={buttonColor.PRIMARY} onPress={() => {}}>
              <AntDesign
                name="minuscircleo"
                size={30}
                color={buttonColor.PRIMARY}
              />
            </Ripple>
            <View
              style={{
                width: responsiveWidth(7),
                justifyContent: 'center',
                alignItems: 'center',
                //   borderWidth: 1,
              }}>
              <Text
                TextStyle={[
                  styles.boldText,
                  {
                    // borderWidth: 1,
                    alignSelf: 'center',
                  },
                ]}>
                1
              </Text>
            </View>
            <Ripple rippleColor={buttonColor.PRIMARY} onPress={() => {}}>
              <AntDesign
                name="pluscircleo"
                size={30}
                color={buttonColor.PRIMARY}
              />
            </Ripple>
          </View>
          <Ripple rippleColor={buttonColor.PRIMARY} onPress={() => {}}>
            <MaterialIcons
              name="delete"
              size={30}
              color={buttonColor.PRIMARY}
            />
          </Ripple>
        </View>
      </View>
    </View>
  );
};

export default SingleCart;
