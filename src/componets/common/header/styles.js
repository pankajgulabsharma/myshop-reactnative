import {StyleSheet} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../constants/AppStyles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(1.5),
    backgroundColor: colors.white,
    // borderBottomWidth: responsiveWidth(0.2),
    // borderBottomColor: colors.spanishGrey,

    // shadowColor: colors.spanishGrey,
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 2.5,
  },
  title: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2.9),
    color: colors.spanishGrey,
    fontWeight: 'bold',
    // borderWidth: 1,
  },
  icon: {
    paddingHorizontal: responsiveWidth(1.5),
  },
});

export default styles;
