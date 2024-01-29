import {Dimensions, StyleSheet} from 'react-native';
import {colors, HP, WP, size, family} from '../utils';

const {width, height} = Dimensions.get('screen');

const appStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  directionRow: {
    flexDirection: 'row',
  },
  directionColumn: {
    flexDirection: 'column',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignSelf: {
    alignSelf: 'center',
  },
  borderWidth: {
    borderWidth: 1,
  },
  borderBottom_1: {
    borderBottomWidth: 1,
  },
  borderBottomColor: {
    borderBottomColor: colors.skyBlue,
  },
  gap_5: {
    gap: 5,
  },
  gap_8: {
    gap: 10,
  },
  gap_10: {
    gap: 10,
  },
  gap_15: {
    gap: 15,
  },
  hD100: {
    height: height,
  },
  wD100: {
    width: width,
  },
  w100: {
    width: '100%',
  },
  w_100: {
    width: WP('100%'),
  },
  w_95: {
    width: WP('95%'),
  },
  w_90: {
    width: WP('90%'),
  },
  w_85: {
    width: WP('85%'),
  },
  w_80: {
    width: WP('80%'),
  },
  w_70: {
    width: WP('70%'),
  },
  w_60: {
    width: WP('60%'),
  },
  w_50: {
    width: WP('50%'),
  },
  w_42: {
    width: WP('42%'),
  },
  w_40: {
    width: WP('40%'),
  },
  w_35: {
    width: WP('35%'),
  },
  w_28: {
    width: WP('28%'),
  },
  w_25: {
    width: WP('25%'),
  },
  w_22: {
    width: WP('22%'),
  },
  margin1Percent: {
    marginTop: HP('1%'),
  },
  margin2Percent: {
    marginTop: HP('2%'),
  },
  margin3Percent: {
    marginTop: HP('3%'),
  },
  margin4Percent: {
    marginTop: HP('4%'),
  },
  margin5Percent: {
    marginTop: HP('5%'),
  },
  fontBold: {
    fontWeight: 'bold',
  },
  seperator: {
    marginVertical: HP('1%'),
  },
  paddingVertical_1: {
    paddingVertical: HP('1%'),
  },
  paddingVertical_2: {
    paddingVertical: HP('2%'),
  },
  paddingVertical_3: {
    paddingVertical: HP('3%'),
  },
  paddingVertical_4: {
    paddingVertical: HP('4%'),
  },
  paddingHorizontal_1: {
    paddingVertical: HP('1%'),
  },
  font9: {
    fontSize: size.xxxtiny,
  },
  font10: {
    fontSize: size.xxtiny,
  },
  font11: {
    fontSize: size.xtiny,
  },
  font12: {
    fontSize: size.tiny,
  },
  font13: {
    fontSize: size.xxsmall,
  },
  font14: {
    fontSize: size.xsmall,
  },
  font15: {
    fontSize: size.small,
  },
  font16: {
    fontSize: size.normal,
  },
  font17: {
    fontSize: size.medium,
  },
  font18: {
    fontSize: size.large,
  },
  font19: {
    fontSize: size.xlarge,
  },
  font20: {
    fontSize: size.xxlarge,
  },
  font22: {
    fontSize: size.h6,
  },
  font24: {
    fontSize: size.h5,
  },
  font25: {
    fontSize: size.h4,
  },
  font26: {
    fontSize: size.h3,
  },
  font28: {
    fontSize: size.h2,
  },
  font30: {
    fontSize: size.h1,
  },
  font32: {
    fontSize: size.title,
  },
  font34: {
    fontSize: size.xtitle,
  },
  font36: {
    fontSize: size.xxtitle,
  },
  font38: {
    fontSize: size.xxxtitle,
  },
  font50: {
    fontSize: size.huge,
  },
  colorPrimary: {
    color: colors.primary,
  },
  colorSecondary: {
    color: colors.secondary,
  },
  //EDIT
  DetailView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  userdetails: {
    marginTop: 10,
    alignItems: 'center',
  },

  //Font Family

  family_Poppins_ThinItalic: {
    fontFamily: family.Poppins_ThinItalic,
  },

  family_Poppins_Thin: {
    fontFamily: family.Poppins_Thin,
  },

  family_Poppins_SemiBoldItalic: {
    fontFamily: family.Poppins_SemiBoldItalic,
  },

  family_Poppins_SemiBold: {
    fontFamily: family.Poppins_SemiBold,
  },

  family_Poppins_Regular: {
    fontFamily: family.Poppins_Regular,
  },

  family_Poppins_MediumItalic: {
    fontFamily: family.Poppins_MediumItalic,
  },

  family_Poppins_Medium: {
    fontFamily: family.Poppins_Medium,
  },

  family_Poppins_LightItalic: {
    fontFamily: family.Poppins_LightItalic,
  },

  family_Poppins_Light: {
    fontFamily: family.Poppins_Light,
  },

  family_Poppins_Italic: {
    fontFamily: family.Poppins_Italic,
  },

  family_Poppins_ExtraLightItalic: {
    fontFamily: family.Poppins_ExtraLightItalic,
  },

  family_Poppins_ExtraLight: {
    fontFamily: family.Poppins_ExtraLight,
  },

  family_Poppins_ExtraBoldItalic: {
    fontFamily: family.Poppins_ExtraBoldItalic,
  },

  family_Poppins_ExtraBold: {
    fontFamily: family.Poppins_ExtraBold,
  },
  family_Poppins_BoldItalic: {
    fontFamily: family.Poppins_BoldItalic,
  },
  family_Poppins_Bold: {
    fontFamily: family.Poppins_Bold,
  },
  family_Poppins_BlackItalic: {
    fontFamily: family.Poppins_BlackItalic,
  },
  family_Poppins_Black: {
    fontFamily: family.Poppins_Black,
  },
  family_Giddyup_Std: {
    fontFamily: family.Giddyup_Std,
  },
  // FLATLIST ITEM SEPERATOR
  lineSeperator: {
    height: 1,
    bordorBottomWidth: 1,
    width: '100%',
    marginVertical: 10,
  },
});
export default appStyles;
