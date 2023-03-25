import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {CachedImage, Text} from '../../componets/elements';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppConstants from '../../constants/AppConstants';
import {buttonColor} from '../../constants/AppStyles';

const data = [
  {
    title: AppConstants.editProfile,
    iconLeft: (
      <FontAwesome5 name="user-edit" size={22} color={buttonColor.PRIMARY} />
    ),
  },
  {
    title: AppConstants.myOrders,
    iconLeft: (
      <Fontisto name="shopping-bag-1" size={22} color={buttonColor.PRIMARY} />
    ),
  },
  {
    title: AppConstants.manageAddress,
    iconLeft: (
      <FontAwesome5 name="address-book" size={22} color={buttonColor.PRIMARY} />
    ),
  },
  {
    title: AppConstants.changePassword,
    iconLeft: <Fontisto name="locked" size={22} color={buttonColor.PRIMARY} />,
  },
  {
    title: AppConstants.logout,
    iconLeft: <AntDesign name="logout" size={22} color={buttonColor.PRIMARY} />,
  },
];
const Account = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subCotainer1}>
        <CachedImage
          imageStyle={{
            // flex: 1,
            height: responsiveWidth(30),
            width: responsiveWidth(30),
            alignSelf: 'center',
            // paddingTop: responsiveHeight(2),
            // borderWidth: 2,
          }}
          imageURL={'https://reactnative.dev/img/tiny_logo.png'}
          resizeMode="contain"
        />
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            TextStyle={styles.userNameText}>
            {'Pankaj Sharma'}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            TextStyle={styles.userEmailText}>
            {'pankajgs1997@gmail.com'}
          </Text>
        </View>
      </View>
      <View style={styles.subCotainer2}>
        {!!data
          ? data.map((currData, index) => (
              <Ripple key={index} style={styles.rippleStyle}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: responsiveWidth(10)}}>
                    {currData.iconLeft}
                  </View>
                  <Text TextStyle={styles.sectionTitle}>{currData.title}</Text>
                </View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={22}
                  color={buttonColor.PRIMARY}
                />
              </Ripple>
            ))
          : null}
      </View>
    </View>
  );
};

export default Account;
