import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import {buttonColor, colors} from '../../constants/AppStyles';
import {pop} from '../../navigation/NavigatorService';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Banner from '../../componets/common/banner';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Button, Text} from '../../componets/elements';
import {Rating} from 'react-native-ratings';
import AppConstants from '../../constants/AppConstants';
import AntDesign from 'react-native-vector-icons/AntDesign';

const bnData = [
  'https://img.freepik.com/free-vector/shopping-time-banner-with-realistic-map-cart-gift-bags-vector-illustration_548887-120.jpg',
  'https://previews.123rf.com/images/varijanta/varijanta1605/varijanta160500044/56755965-thin-line-flat-design-banner-for-sale-web-page-shopping-e-commerce-discounts-and-clearance-sale.jpg',
  // 'https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiU8pYb4d5oxTakVahS1ejMA9t6YlEOvWUIpvcwiq3&s',
];
const ProductDetails = () => {
  function ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  return (
    <>
      <ScrollView
        style={styles.maincontainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerBtnscontainer}>
          <Ripple
            rippleColor={buttonColor.PRIMARY}
            onPress={() => pop(1)}
            style={styles.backicon}>
            <MaterialIcons
              name="arrow-back"
              size={30}
              color={buttonColor.PRIMARY}
            />
          </Ripple>
          <Ripple rippleColor={buttonColor.PRIMARY} style={styles.hearticon}>
            {/* <Ionicons
              name="heart-sharp"
              size={30}
              color={buttonColor.PRIMARY}
            /> */}
            <Ionicons
              name="heart-outline"
              size={30}
              color={buttonColor.PRIMARY}
            />
          </Ripple>
        </View>
        <View style={{}}>
          <Banner
            bannerData={bnData}
            autoplay={false}
            bannerContainerStyle={{
              height: responsiveHeight(40),
              //   borderWidth: 1,
            }}
            bannerSubContainerStyle={{
              height: responsiveHeight(40),
              //   borderWidth: 1,
            }}
            bannerImage={{
              height: responsiveHeight(40),
              borderBottomLeftRadius: responsiveWidth(10),
              borderBottomRightRadius: responsiveWidth(10),
              //   borderWidth: 1,
            }}
            resizeMode="stretch"
          />
        </View>
        <View
          style={{
            marginHorizontal: responsiveWidth(5),
            marginVertical: responsiveWidth(5),
            // borderWidth: 1,
          }}>
          <Text TextStyle={styles.boldText}>
            This is the main title of the product
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              //   paddingHorizontal: responsiveWidth(3),
              paddingTop: responsiveHeight(2),
              //   borderWidth: 1,
            }}>
            <View style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  //   paddingLeft: -10,
                  // borderWidth: 1,
                }}>
                <Rating
                  // onFinishRating={ratingCompleted}
                  imageSize={20}
                  style={{
                    width: responsiveWidth(27),
                    // borderWidth: 1,
                  }}
                  readonly={true}
                />
                <Text
                  TextStyle={[
                    styles.boldText,
                    {paddingLeft: responsiveWidth(2)},
                  ]}>
                  4.0
                </Text>
              </View>
              <Ripple rippleColor={buttonColor.PRIMARY} onPress={() => {}}>
                <Text TextStyle={styles.review}>365 reviews</Text>
              </Ripple>
            </View>
            <View style={styles.priceText}>
              <Text TextStyle={[styles.boldText, {color: colors.white}]}>
                $ 354
              </Text>
            </View>
          </View>
          <View style={{}}>
            <Text
              TextStyle={[
                styles.boldText,
                {paddingVertical: responsiveHeight(2)},
              ]}>
              Description:
            </Text>
            <Text TextStyle={{}}>
              Amet labore nulla nostrud veniam tempor velit qui aliquip ad ad in
              do ut duis. Ullamco est laborum duis proident dolor aute sit
              excepteur ullamco dolor. Eu pariatur culpa ullamco enim aliqua
              ullamco incididunt nulla sit laboris duis do sit nulla. Id commodo
              ipsum exercitation enim anim id aliquip duis cillum exercitation
              velit. Cupidatat occaecat laboris eiusmod cillum deserunt ex eu
              aliquip ea deserunt anim in. Anim esse veniam sint id ex consequat
              qui duis. Amet labore nulla nostrud veniam tempor velit qui
              aliquip ad ad in do ut duis. Ullamco est laborum duis proident
              dolor aute sit excepteur ullamco dolor. Eu pariatur culpa ullamco
              enim aliqua ullamco incididunt nulla sit laboris duis do sit
              nulla. Id commodo ipsum exercitation enim anim id aliquip duis
              cillum exercitation velit. Cupidatat occaecat laboris eiusmod
              cillum deserunt ex eu aliquip ea deserunt anim in. Anim esse
              veniam sint id ex consequat qui duis.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBtnsContainer}>
        <Button
          title={AppConstants.addToCart}
          rippleColor={buttonColor.BUTTON_DANGER}
          addonPrimaryStyle={[styles.addTocart]}
          addonPrimaryTextStyle={styles.addTocartText}
          onPress={() => {}}
        />
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Ripple rippleColor={buttonColor.PRIMARY} onPress={() => {}}>
            <AntDesign
              name="minuscircleo"
              size={35}
              color={buttonColor.PRIMARY}
            />
          </Ripple>
          <View
            style={{
              width: responsiveWidth(11),
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
              size={35}
              color={buttonColor.PRIMARY}
            />
          </Ripple>
        </View>
      </View>
    </>
  );
};

export default ProductDetails;
