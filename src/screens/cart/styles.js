import {Dimensions, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {buttonColor, colors} from '../../constants/AppStyles';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.grey97,
  },
  cardContainer: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: width - 40,
    height: responsiveHeight(20),
    marginVertical: responsiveWidth(5),
    alignSelf: 'center',
    borderRadius: responsiveWidth(5),
    // borderWidth: 1,
  },
  image: {
    width: responsiveWidth(34.5),
    height: responsiveHeight(20),
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'center',
    // borderWidth: 2,
  },
  boldText: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '400',
  },
  priceTextContainer: {
    paddingVertical: responsiveHeight(2),
    fontSize: responsiveFontSize(2.3),
    fontWeight: '500',
  },
  priceText: {
    color: buttonColor.PRIMARY,
  },
});
export default styles;
