import React, {useState} from 'react';
import {FlatList, SafeAreaView, View, ScrollView} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Banner from '../../componets/common/banner';
import Header from '../../componets/common/header';
import SearchInput from '../../componets/common/searchinput';
import {Button, CachedImage, Text} from '../../componets/elements';
import AppConstants from '../../constants/AppConstants';
import {buttonColor, colors} from '../../constants/AppStyles';
import styles from './styles';

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
const Home = () => {
  const [search, setSearch] = useState('');

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

  return (
    <SafeAreaView>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
