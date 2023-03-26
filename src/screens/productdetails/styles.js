import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {buttonColor, colors} from '../../constants/AppStyles';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: colors.white,
    // backgroundColor: colors.red,
    // borderWidth: 1,
  },
  headerBtnscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveWidth(5),
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1,
    // borderWidth: 1,
  },
  boldText: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
  },
  review: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingTop: responsiveWidth(3),
    // paddingLeft: responsiveWidth(1),
    // borderWidth: 1,
  },
  addTocart: {
    backgroundColor: buttonColor.PRIMARY,
    paddingHorizontal: responsiveWidth(10),

    // marginBottom: responsiveHeight(2.5),
    // padding: responsiveWidth(5),
  },
  addTocartText: {
    // textTransform: 'none',
    padding: responsiveWidth(2),
  },
  priceText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: buttonColor.PRIMARY,
    borderTopLeftRadius: responsiveWidth(5),
    borderBottomLeftRadius: responsiveWidth(5),
    marginLeft: responsiveWidth(10),
    paddingLeft: responsiveWidth(5),
    // borderWidth: 1,
  },
  bottomBtnsContainer: {
    // position: 'absolute',
    // zIndex: 1,
    // width: responsiveWidth(50),
    // bottom: 0,
    // borderWidth: 1,
    paddingHorizontal: responsiveWidth(5),
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //   paddingVertical: responsiveWidth(5),
  },
});
export default styles;
