import React, {useState} from 'react';
import {Dimensions, FlatList, TouchableOpacity, View} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {CachedImage, Text} from '../../componets/elements';
import {colors} from '../../constants/AppStyles';
import styles from './styles';

let width = Dimensions.get('screen').width;
let height = Dimensions.get('screen').height;

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

const numColumns = 2;
const Categories = () => {
  const [category, setCategory] = useState(pData);

  const formatData = (category, numColumns) => {
    // console.log('===formatData===');
    //lets us assume category=9
    const totalRows = Math.floor(category.length / numColumns); //  9/2=4.5 => 4
    let totalLastRow = category.length - totalRows * numColumns; //9-(4*2)=1
    let emptycategorypace = [];

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      emptycategorypace.push({
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
    // console.log('emptycategorypace===>', emptycategorypace);
    return [...category, ...emptycategorypace];
  };

  const renderItem = ({item}) => {
    // console.log('item===>', item);
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
      <TouchableOpacity
        // rippleColor={buttonColor.PRIMARY}
        activeOpacity={0.8}
        onPress={() => {}}
        style={styles.productCardContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 2,
          }}>
          <CachedImage
            imageStyle={[
              {
                height: width / numColumns - responsiveHeight(6),
                width: width / numColumns - 30,
              },
              styles.image,
            ]}
            imageURL={item.imagePath}
            resizeMode="stretch"
          />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            TextStyle={styles.categoryText}>
            {item.imageName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={formatData(category, numColumns)} // formatData alway return data
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={{flexGrow: 1, backgroundColor: colors.white}}
      showsVerticalScrollIndicator={false}
      extraData={category} //use to re-render the flatlist items dynamically
      numColumns={numColumns}
    />
  );
};

export default Categories;
