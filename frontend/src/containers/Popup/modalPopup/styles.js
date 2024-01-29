import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils';
import {fontSize, size} from '../../../utils/sizes';
import appStyles from '../../../screens/appStyles';
const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  buttonStyle: {
    // width: width ,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.gray,
    borderRadius: 30,
    justifyContent: 'flex-start',
  },
  buttonPerfectionNext: {
    backgroundColor: colors.gray,
    paddingHorizontal: 10,
  },
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
    height: 78,
  },
  tabsText: {},
  active: {
    height: 4,
    width: 4,
    borderRadius: 30,
    marginBottom: 4,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  modalChild: {
    ...appStyles.w_90,
    backgroundColor: colors.blue_1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    ...appStyles.alignCenter,
    paddingHorizontal: 10,
    ...appStyles.justifyCenter,
    ...appStyles.paddingVertical_3,
  },
  buttonStyle3: {
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.green,
    borderRadius: 30,
  },
  buttonStyle2: {
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.green,
    borderRadius: 30,
  },
  modalTitle: {
    ...appStyles.family_Montserrat_Semi_Bold,
    ...appStyles.font14,
    color: colors.white,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 100,
    borderColor: colors.blue_1,
    borderWidth: 2,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  time: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.gray,
    marginTop: 2,
  },
  name: {fontSize: 15, fontWeight: '600'},
  dot: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
    tint: colors.black,
  },
  profileDetail: {
    flexDirection: 'row',
  },
  listContainer: {
    flexDirection: 'row',
  },
  profileData: {
    backgroundColor: colors.blue_02,
    paddingHorizontal: 20,
    ...appStyles.paddingVertical_2,
  },
  contentContainer: {
    backgroundColor: colors.white,
  },
  ScrollView: {},
  lineSeparator: {
    height: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.skyBlue,
  },
  FlatList: {
    maxHeight: height * 0.61,
  },
  iconWrapper: {
    width: 50,
    height: 50,
  },
  icon: {
    height: '100%',
    width: '100%',
  },

  socialContainer: {
    ...appStyles.justifySpaceBetween,
    ...appStyles.alignCenter,
    flex: 1,
    ...appStyles.paddingVertical_2,
    backgroundColor: colors.white,
  },
  postImg: {
    height: '100%',
    width: '100%',
  },
  postImgWrap: {
    height: 230,
  },
  press: {
    backgroundColor: colors.primary,
    // marginTop: 1,
    width: '45%',
    height: 48,
    gap: 5,
    borderWidth: 0.6,
    ...appStyles.borderWidth,
    borderColor: colors.primary,
  },
  btnstext: {
    fontSize: size.tiny,
    color: colors.white,
    ...appStyles.family_Poppins_Medium,
  },
  press2: {
    backgroundColor: colors.red,
    width: '45%',
    gap: 5,
    height: 48,
    ...appStyles.borderWidth,
    borderColor: colors.black,
    borderWidth: 0.6,
    marginLeft: 10,
  },
  btnstext2: {
    fontSize: size.tiny,
    color: colors.white,
    ...appStyles.family_Poppins_Medium,
  },
  desc: {
    fontSize: size.xsmall,
    color: colors.black,
    ...appStyles.family_Poppins_Medium,
    textAlign:'center',
    paddingHorizontal:20
  },
  titleFeed: {
    fontSize: size.normal,
    color: colors.black,
    ...appStyles.family_Montserrat_Semi_Bold,
  },
  des: {
    fontSize: size.tiny,
    color: colors.black,
    ...appStyles.family_Poppins_Medium,
  },
  customStyle: {
    backgroundColor: colors.white,
    paddingVertical: 5,
    ...appStyles.w_85,
  },
  main: {backgroundColor: 'white', borderRadius: 20, paddingVertical: 20},
  lottieContainer: {
    alignItems: 'center',
    ...appStyles.gap_10,
  },
  title: {
    fontSize: size.h6,
    color: colors.secondary,
    ...appStyles.family_Poppins_Bold,
  },
  btnStyles: {
    backgroundColor: colors.primary,
    width: width / 1.25,
    height: 48,
    ...appStyles.borderWidth,
    borderColor: colors.primary,
  },
  btnTextStyles: {
    fontSize: size.small,
    color: colors.white,
    ...appStyles.family_Montserrat_Bold,
  },
});
