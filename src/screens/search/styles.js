import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../constants/AppStyles';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(3.2),
    alignItems: 'center',
    marginBottom: responsiveHeight(1.2),
    backgroundColor: colors.white,
    // borderWidth: 1,
  },
  inputstyle: {
    fontSize: responsiveFontSize(2.3),
    paddingLeft: responsiveWidth(2.5),
  },
  customInputContainer: {
    backgroundColor: colors.grey1,
    borderRadius: responsiveWidth(2),
  },
  filter: {
    marginLeft: responsiveWidth(1),
    padding: responsiveWidth(1.5),
    // borderWidth: 1,
  },
  productCardContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 1,
    margin: responsiveWidth(1.3),
  },
});

export default styles;
