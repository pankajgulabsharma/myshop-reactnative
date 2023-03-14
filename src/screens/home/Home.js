import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Banner from '../../componets/common/banner';
import Header from '../../componets/common/header';
import SearchInput from '../../componets/common/searchinput';
import {Button, CachedImage, Text} from '../../componets/elements';
import AppConstants from '../../constants/AppConstants';
import {buttonColor, colors} from '../../constants/AppStyles';
import styles from './styles';
import {FlashList} from '@shopify/flash-list';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: require('../../assets/images/category/tshirt.jpg'),
    name: 'tshirt',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: require('../../assets/images/category/mobiles.jpg'),
    name: 'mobiles',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: require('../../assets/images/category/headphones.jpg'),
    name: 'headphones',
  },
  {
    id: '58694aqf-3da1-471f-bd96-145571e29d72',
    image: require('../../assets/images/category/speakers.jpg'),
    name: 'speakers',
  },
  {
    id: '58694aof-3da1-471f-bd96-145571e29d72',
    image: require('../../assets/images/category/kidswear.jpg'),
    name: 'kidswear',
  },
  {
    id: '58694aof-3da1-471f-bd96-145571e29d77',
    image: require('../../assets/images/category/bags.jpg'),
    name: 'bags',
  },
];

const bnData = [
  'https://previews.123rf.com/images/varijanta/varijanta1605/varijanta160500044/56755965-thin-line-flat-design-banner-for-sale-web-page-shopping-e-commerce-discounts-and-clearance-sale.jpg',
  'https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiU8pYb4d5oxTakVahS1ejMA9t6YlEOvWUIpvcwiq3&s',
  'https://img.freepik.com/free-vector/shopping-time-banner-with-realistic-map-cart-gift-bags-vector-illustration_548887-120.jpg',
];

const FData = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'third Item',
  },
  {
    title: 'Second last',
  },
  {
    title: 'last Item',
  },
  {
    title: 'Pankaj Item',
  },
];

const pData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    imageName: 'First Pankaj Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    imageName: 'Second Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14t571e29d72',
    imageName:
      'Third Item jsdhfkjhf  usdhf f asfjhksj  jsdhfsjfasdfasdfsd hkajsdf',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
  },
  {
    id: '58694a0f-3da1-471f-bd96-147571e29d72',
    imageName: 'Fourth Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
  },
  {
    id: '58694a0f-3da1-471f-bd96-o48571e29d72',
    imageName: 'Fifth Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
  },
  {
    id: '58694a0f-3da1-671f-bd96-148571e29d72',
    imageName: 'Sixth Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
  },
  {
    id: '58694a0f-3da1-4w1f-bd96-148571e29d72',
    imageName: 'Seventh Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
  },
  {
    id: '58691a0f-3da1-471f-bd96-148571e29d72',
    imageName: 'Eightth Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
  },
  {
    id: '58694a0f-3da1-671f-bd96-148571e29d78',
    imageName: 'Nineth Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471f-bd9n-148571e29d72',
    imageName: 'Tenth Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471f-bt96-148571e29d72',
    imageName: 'Eleventh Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-148571er9d72',
    imageName: 'Twelve Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-148571e2qd72',
    imageName: 'Thirteenth Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-4w1fz-bd96-148571e2qd72',
    imageName: 'Fourteenth Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471v-bd96-148571e2qd72',
    imageName: 'Fifteenth Item',
    imagePath: 'https://reactnative.dev/img/tiny_logo.png',
    date: '31/12/2022',
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471c-bd96-148571e2qd72',
    imageName: 'Sixteenth Last Item',
    imagePath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgauKZyRrJ6L7sggCeylxXxB2EeaxODcEBg&usqp=CAU',
    date: '31/12/2022',
  },
];
const numColumns = 2; // number of columns that we want into single row

let width = Dimensions.get('screen').width;
let height = Dimensions.get('screen').height;

const Home = () => {
  const [search, setSearch] = useState('');
  const [product, setProduct] = useState(pData);

  const formatData = (product, numColumns) => {
    // console.log('===formatData===');
    //lets us assume product=9
    const totalRows = Math.floor(product.length / numColumns); //  9/2=4.5 => 4
    let totalLastRow = product.length - totalRows * numColumns; //9-(4*2)=1
    let emptyProductpace = [];

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      emptyProductpace.push({
        id:
          '58694a0f-3da1-471v-bd96-148571e' +
          Math.random().toString(36).substring(2, 7),
        imageName: 'blanck Item',
        imagePath: 'https://reactnative.dev/img/tiny_logo.png',
        date: '31/12/2022',
        empty: true,
      });
      totalLastRow++; // to increase totalLastRow from 1
    }
    // console.log('emptyProductpace===>', emptyProductpace);
    return [...product, ...emptyProductpace];
  };

  const renderItem = ({item}) => {
    console.log('item===>', item);
    if (item?.empty) {
      return (
        <View
          style={{
            flex: 1,
            margin: 5,
            backgroundColor: 'transparent',
          }}
        />
      );
    }

    return (
      <Ripple
        rippleColor={buttonColor.PRIMARY}
        onPress={() => {}}
        style={styles.productCardContainer}>
        <View style={{}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: width / numColumns - 40,
              justifyContent: 'space-between',
              position: 'absolute',
              zIndex: 1,
              padding: responsiveWidth(1),
              // borderWidth: 2,
            }}>
            <Button
              title={AppConstants.new}
              type="outline"
              color="primary"
              addonOutlineStyle={{
                textTransform: 'none',
                paddingHorizontal: responsiveWidth(2),
                paddingVertical: 0,
              }}
              addonOutlineTextStyle={{fontSize: responsiveFontSize(1.5)}}
              onPress={() => {}}
            />
            {/* <View
              style={{
                borderWidth: responsiveWidth(1),
                backgroundColor: colors.white,
              }}>
              <Text TextStyle={{color: 'red'}}>{AppConstants.new}</Text>
            </View> */}
            <Ripple
              style={{
                // borderWidth: 2,
                borderRadius: responsiveWidth(25),
                padding: responsiveWidth(1),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: buttonColor.PRIMARY,
              }}>
              <MaterialIcons name="favorite" size={20} />
            </Ripple>
          </View>
          <CachedImage
            imageStyle={{
              // flex: 1,
              height: width / numColumns - responsiveHeight(10),
              width: width / numColumns - 40,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              // borderWidth: 2,
            }}
            imageURL={item.imagePath}
            resizeMode="stretch"
          />
        </View>
        <View
          style={{
            paddingHorizontal: responsiveWidth(3),
            marginTop: responsiveHeight(1),
          }}>
          <View>
            <Text numberOfLines={1}>{`* * * *`}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
              {item.imageName}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: responsiveHeight(1),
            }}>
            <Text>{`$350`}</Text>
            <Text>{`20% OFF`}</Text>
          </View>
        </View>
      </Ripple>
    );
  };

  const _renderSeparator = () => {
    return (
      <View
        style={{
          width: responsiveWidth(2.5),
          height: '100%',
          backgroundColor: colors.white,
        }}
      />
    );
  };

  const _renderHeader = () => {
    return (
      <>
        <View>
          <View style={styles.textsContainer}>
            <Text TextStyle={styles.leftTitleText}>
              {AppConstants.topcategories}
            </Text>
            <Button
              title={AppConstants.viewall}
              type="text"
              color="primary"
              addonTextStyle={styles.viewallText}
              onPress={() => {}}
              antIcon={true}
            />
          </View>
        </View>

        <View style={styles.flatlistContainer}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <Ripple
                rippleColor={buttonColor.PRIMARY}
                onPress={() => {}}
                style={styles.flatlistRipple}>
                <CachedImage
                  imageStyle={styles.cachedImageStyle}
                  imageURL={item.image}
                />
                <Text>{item.name}</Text>
              </Ripple>
            )}
            keyExtractor={item => item.id}
            horizontal
            ItemSeparatorComponent={_renderSeparator}
          />
        </View>

        <Banner bannerData={bnData} />

        <View>
          <View style={styles.textsContainer}>
            <Text TextStyle={styles.leftTitleText}>
              {AppConstants.newproducts}
            </Text>
            <Button
              title={AppConstants.viewall}
              type="text"
              color="primary"
              addonTextStyle={styles.viewallText}
              onPress={() => {}}
              antIcon={true}
            />
          </View>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Header />
        <View style={styles.searchContainer}>
          <SearchInput
            value={search}
            onChangeText={setSearch}
            inputstyle={styles.inputstyle}
            serchContainer={styles.serchContainer}
          />
          <Ripple
            rippleColor={buttonColor.PRIMARY}
            onPress={() => {}}
            style={styles.filter}>
            <MaterialIcons
              name="filter-alt"
              size={25}
              color={buttonColor.PRIMARY}
            />
          </Ripple>
        </View>

        <View
          style={{
            height: height - responsiveHeight(19),
            width: width,
            // borderWidth: 1,
            // borderColor: 'red',
          }}>
          <FlashList
            contentContainerStyle={{padding: responsiveWidth(5)}}
            data={formatData(product, numColumns)} // formatData alway return data
            renderItem={renderItem}
            numColumns={numColumns}
            estimatedItemSize={150}
            ListHeaderComponent={_renderHeader}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
