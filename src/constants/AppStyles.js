// All the App styles go here
import {Dimensions, Platform, StatusBar, PixelRatio} from 'react-native';
import {getStatusBarHeight} from './IsIphoneX';

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const buttonColor = {
  PRIMARY: '#5856D6',
  BUTTON: '#5856D6',
  OUTLINE: '#5856D6',
  TEXT: '#000',
  BORDER: '#91919145',
  BUTTON_DANGER: '#FF6969',
  TEXT_SUCCESS: '#00D842',
  BUTTON_SUCCESS: '#008D31',
  GRAY_ICON: '#8a8a8f',
};

export const colors = {
  pinkPurple: '#9B5989',
  darkPink: '#8D6281',
  greyishBlack: '#080808',
  brown: '#DD7E63',
  brown2: '#C97726',
  red: '#DD4B39',
  orangeRed: '#DE5F30',
  lightRed: '#D96D6D',
  darkRed: '#C42121',
  blue1: '#153E90',
  blue2: '#0B9EFF',
  blue3: '#3A5998',
  blue4: '#2878E6',
  blue5: '#5856D6',
  skyBlue: '#0C9EFF',
  greyishBlue: '#6084CC',
  darkGreyishBlue: '#415C93',
  darkSkyBlue: '#6791E2',
  veryDarkSykBlue: '#456DBF',
  greenishBlue: '#36ADC4',
  darkBlue: '#30426E',
  white: '#FFFFFF',
  white1: '#D6D6D6',
  grey1: '#D6D6D6B3',
  grey2: '#8A8A8F',
  grey3: '#D6D6D680',
  grey4: '#91919145',
  grey5: '#727272',
  spanishGrey: '#989898',
  darkGrey: '#292929',
  darkGrey1: '#FFFFFF66',
  yellow1: '#FCA310',
  darkYellow: '#A79353',
  pinkRed: '#C24F6A',
  grey5: '#8598AC',
  green: '#4FB11B',
  black1: '#1C1C1C',
  black2: '#000000',
  black3: '#000000EB',
  black4: '#5D5D5D',
  white2: '#00000033',
  white3: '#FFFFFF80',
  shadowColor: '#00000014',
  borderColor: '#91919145',
  redNotification: '#FF6969',
  areaGraphBlue: '#439DAE',
  areaGraphPurple: '#5674AF',
  headerBlack: 'rgba(0, 0, 0, 0.8)',
  areaGraphPointerLabel: '#2A2E43',
  black: '#000000',
  searchPlaceholderColor: '#FFFFFF66',
  tooltipYearColor: '#F8F8F8',
  tooltipValueColor: '#FDFDFD',
  pointerStrip: '#439DAE00',
  orange: '#5DC529',
  passStrengthPerfect: '#55B924',
  validationText: '#14213D',
  white4: 'rgba(255, 255, 255, 1)',
  grey6: 'rgba(255, 255, 255, 0.4)',
  grey7: 'rgba(41, 41, 41, 1)',
  blue5: 'rgba(21, 62, 144, 1)',
  dullWhite: 'rgba(255, 255, 255, 0.5)',
  grey8: '#0C9EFF',
};

export const rgbaColor = {
  borderDarkGrey: '255,0,0',
};

export const getRgbaColor = (color, opacity) => {
  return `rgba(${rgbaColor[color]}, ${opacity})`;
};

export const fonts = {
  PoppinsRegular: 'Poppins-Regular',
  PoppinsMedium: 'Poppins-Medium',
  arialRegular: 'Arial-Regular',
};

export const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  return isIos
    ? dimen.height === 812 ||
        dimen.width === 812 ||
        dimen.height === 896 ||
        dimen.width === 896
    : dimen.height > 736;
};

export const isIphone6 = () => {
  const dimen = Dimensions.get('window');
  return dimen.height > 600 && dimen.height < 750;
};

const widthPercentageToDP = (
  iphoneWidthPercent,
  androidWidthPercent = iphoneWidthPercent,
) => {
  const elemWidth =
    typeof iphoneWidthPercent === 'number'
      ? isIos
        ? iphoneWidthPercent
        : androidWidthPercent
      : parseFloat(isIos ? iphoneWidthPercent : androidWidthPercent);
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100);
};

export const HeightPercentageToDP = (
  iphoneHeightPercent,
  androidHeightPercent = iphoneHeightPercent,
) => {
  const elemHeight =
    typeof iphoneHeightPercent === 'number'
      ? isIos
        ? iphoneHeightPercent
        : androidHeightPercent
      : parseFloat(isIos ? iphoneHeightPercent : androidHeightPercent);
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
};

export const deviceDimensions = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  WPTDP: widthPercentageToDP,
  HPTDP: HeightPercentageToDP,
  WHRatio: SCREEN_WIDTH / SCREEN_HEIGHT,
};

export const heiWidScale = 0.125;

export const scales = (size, type = 'height') => {
  if (type == 'height') {
    return deviceDimensions.HPTDP(heiWidScale * size);
  }
  return deviceDimensions.WPTDP(heiWidScale * size);
};

const iphoneXBottomSpace = scales(35);

export const dimensions = {
  statusBar: getStatusBar(true),
  topExtraSpace: 6,
  topSpace: this.statusBar + 6,
  roundBtnHeight:
    Math.min(deviceDimensions.height, deviceDimensions.width) * 0.2,
  bottomButtonHeight: 60,
  numKeyboardHeight: deviceDimensions.height * 0.67,
  iphoneXBottomSpace,
  tabBarHeight: deviceDimensions.HPTDP(isIphoneX() ? '7.5%' : '10%', '10%'),
  safeHeight:
    deviceDimensions.height -
    getStatusBar(true) -
    (isIphoneX() ? iphoneXBottomSpace : 0),
};

function getStatusBar() {
  return !isIos ? StatusBar.currentHeight : getStatusBarHeight();
}

export const fontScale = 0.123;

export const fontSize = size => {
  return deviceDimensions.HPTDP(fontScale * size);
};

export const fontSizes = {
  extraLarge: fontSize(72),
  large: fontSize(58),
  heading: fontSize(33),
  title: fontSize(28),
  h1: fontSize(25),
  h2: fontSize(24),
  h3: fontSize(22),
  h4: fontSize(21),
  h5: fontSize(20),
  h6: fontSize(19),
  h7: fontSize(17),
  body1: fontSize(18),
  body2: fontSize(16),
  body3: fontSize(15),
  subtitle1: fontSize(14),
  subtitle2: fontSize(13),
  caption: fontSize(12),
  caption1: fontSize(11),
  small: fontSize(10),
  smaller: fontSize(9),
  normal: fontSize(11),
  extraSmall: fontSize(8),
};

export const marginPaddingScale = 0.125;
export const svgWidthScale = 0.122;
export const svgHeightScale = 0.126;

export const spacing = size => {
  return deviceDimensions.HPTDP(marginPaddingScale * size);
};

export const svgWidth = size => {
  return deviceDimensions.HPTDP(svgWidthScale * size);
};

export const svgHeight = size => {
  return deviceDimensions.HPTDP(svgHeightScale * size);
};

export const dynamicFontSize = size => {
  return;
};
