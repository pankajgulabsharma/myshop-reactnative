import {StyleSheet} from 'react-native';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

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
  serchContainer: {
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
  },
});
export default styles;
