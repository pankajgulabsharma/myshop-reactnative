import {StyleSheet, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../constants/AppStyles';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gainsboro',
    backgroundColor: colors.white,
    // borderWidth: 1,
  },
  swipper: {
    flex: 1,
    alignItems: 'center',
    // borderWidth: 1,
  },
  subSwipperContainer: {
    height: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  imageBanner: {
    height: width / 2,
    // width: width,
    // borderRadius: 10,
    // borderWidth: 1,
  },
});

export default styles;
