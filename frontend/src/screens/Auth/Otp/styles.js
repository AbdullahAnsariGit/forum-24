import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';
import Shadows from '../../../helpers/Shadows';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS == 'ios' ? 20 : 5,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.3,
    resizeMode: 'contain',
    marginVertical: '10%',
  },
  title: {
    color: colors.black,
    ...appStyles.font14,
    ...appStyles.family_Poppins_Regular,
  },
  disabledResend: {
    color: colors.gray,
  },
  underlineStyleBase: {
    width: 53,
    height: 53,
    borderWidth: 0,
    borderRadius: 100,
    backgroundColor: colors.white,
    ...Shadows.shadow3,
    // borderColor: '#ffffff',
    // borderWidth: 2,
    color: 'black',
    fontSize: 17,
  },
  textNormal: {
    ...appStyles.font15,
    ...appStyles.family_Poppins_Regular,
    // fontWeight: '700',
    color: colors.black,
  },
  textNormalWithColor: {
    color: colors.secondary,
    ...appStyles.font15,
    // fontWeight: '700',
    marginTop: -2,
    ...appStyles.family_Poppins_SemiBold,
  },
  time: {
    color: colors.time,
    ...appStyles.family_Poppins_SemiBold,
  },
  otpInput: {
    width: '90%',
    height: 20,
    alignSelf: 'center',
    marginVertical: 40,
  },
  timerText: {
    alignSelf: 'flex-end',
    color: 'black',
    fontSize: 13,
    marginBottom: 10,
    marginRight: 27,
  },
});

export default styles;
