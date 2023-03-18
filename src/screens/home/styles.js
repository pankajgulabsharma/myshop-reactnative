import {StyleSheet} from 'react-native';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {colors} from '../../constants/AppStyles';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(3.2),
    // borderWidth: 1,
    alignItems: 'center',
    marginBottom: responsiveHeight(1.2),
  },
  filter: {
    marginLeft: responsiveWidth(1),
    padding: responsiveWidth(1.5),
    // borderWidth: 1,
  },
  textsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(3.2),
    // borderWidth: 1,
  },
  leftTitleText: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.3),
    marginVertical: responsiveHeight(1.7),
    // borderWidth: 0.5,
  },
  viewallText: {
    fontWeight: 'bold',
    textTransform: 'none',
  },
  inputstyle: {
    fontSize: responsiveFontSize(2.3),
    paddingLeft: responsiveWidth(2.5),
  },
  customInputContainer: {
    backgroundColor: colors.grey1,
    borderRadius: responsiveWidth(2),
  },
  cachedImageStyle: {
    height: responsiveHeight(10),
    width: responsiveHeight(10),
    // borderWidth: 1,
  },
  flatlistContainer: {
    marginLeft: responsiveWidth(3.2),
  },
  flatlistRipple: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
  },
  productCardContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 1,
    margin: responsiveWidth(2),
  },
});
export default styles;
