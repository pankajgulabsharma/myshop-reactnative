import {Dimensions, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {buttonColor, colors} from '../../constants/AppStyles';

let width = Dimensions.get('screen').width;
let height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    backgroundColor: colors.grey97,
  },
  subCotainer1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingVertical: responsiveHeight(3),
    // borderWidth: 1,
  },
  userNameText: {
    paddingVertical: responsiveHeight(1),
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    color: buttonColor.PRIMARY,
  },
  userEmailText: {
    // fontWeight: 'bold',s
    fontSize: responsiveFontSize(2),
    color: buttonColor.PRIMARY,
  },
  subCotainer2: {
    flex: 1,
    // backgroundColor: 'red',
    borderTopLeftRadius: responsiveWidth(12),
    borderTopRightRadius: responsiveWidth(12),
    backgroundColor: colors.white,
    paddingTop: responsiveHeight(2),
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    paddingLeft: responsiveWidth(2),
  },
  rippleStyle: {
    flexDirection: 'row',
    borderRadius: responsiveWidth(5),
    padding: responsiveWidth(1),
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: responsiveWidth(5),
    // borderWidth: 2,
    // backgroundColor: buttonColor.PRIMARY,
  },
});
export default styles;
