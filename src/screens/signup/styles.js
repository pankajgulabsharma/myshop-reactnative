import {StyleSheet, Dimensions} from 'react-native';
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
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: responsiveWidth(4),
    backgroundColor: colors.white,
  },
  imageBackground: {
    width: width,
    height: responsiveHeight(20),
    // borderWidth: 1,
  },
  loginText: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(1),
  },
  inputContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // marginHorizontal: responsiveWidth(3.2),
    // borderWidth: 1,
    // alignItems: 'center',
    marginVertical: responsiveHeight(1.2),
  },
  inputstyle: {
    fontSize: responsiveFontSize(2.3),
    paddingLeft: responsiveWidth(2.5),
  },
  customInputContainer: {
    borderColor: colors.grey2,
    borderRadius: responsiveWidth(2),
    borderWidth: 1,
  },
  forgotTextContainerStyle: {
    // borderWidth: 1,
    alignSelf: 'flex-end',
    marginBottom: responsiveHeight(2.5),
  },
  forgotTextStyle: {
    // backgroundColor: 'none',
    // borderWidth: 1,
    textTransform: 'none',
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
    color: colors.grey2,
    // alignSelf: 'flex-end',
  },
  loginButton: {
    backgroundColor: buttonColor.PRIMARY,
    marginBottom: responsiveHeight(2.5),
    // padding: responsiveWidth(5),
  },
  logintext: {
    // textTransform: 'none',
    padding: responsiveWidth(2),
  },
  errorText: {
    color: colors.red,
    fontSize: responsiveFontSize(2),
  },
});
export default styles;
