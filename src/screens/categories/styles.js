import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../constants/AppStyles';

const styles = StyleSheet.create({
  productCardContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 1,
    margin: responsiveWidth(1.3),
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: responsiveHeight(2),
  },
  categoryText: {
    paddingVertical: responsiveHeight(2),
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
  },
});

export default styles;
