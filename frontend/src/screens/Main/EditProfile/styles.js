import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';
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
  emailinput: {
    borderRadius: 40,
    width: '100%',
    // backgroundColor:'red'
  },
  phoneContainer: {
    padding: 1,
    height: 55,
    width: width - 30,

    // width: WP('88%'),
    borderRadius: 30,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  countryPickerButtonStyle: {
    width: 55,
    borderRadius: 30,
    height: 55,
    backgroundColor: colors.white,
  },
  textContainerPhone: {
    marginLeft: 10,
    borderRadius: 30,
    height: 55,
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  uploadView: {
    marginLeft: 10,
    marginVertical: 10,
    gap: 0,
    // marginTop: 60,
  },
  uploaddocuments: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    gap:5
  },
  textInputStyles: {
    // backgroundColor:'red'
  },
  uploaddoctext: {
    ...appStyles.font15,
    color: colors.black,
    ...appStyles.family_Poppins_SemiBold,
  },
  btn: {
    ...appStyles.margin2Percent,
  },
  btntext: {
    ...appStyles.family_Poppins_SemiBold,
    ...appStyles.font14,
  },
  uploaddocsubtext: {
    ...appStyles.font13,
    color: colors.black,
    ...appStyles.family_Poppins_Medium,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    marginTop: 50,
    width: 160,
    ...Shadows.shadow5,
    backgroundColor: '#B8E5F7',
    borderRadius: 100,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  textNormal: {
    marginVertical: 20,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  logoStyle: {
    position: 'relative',
  },
  upload: {
    position: 'absolute',
    bottom: '16%',
    zIndex: 20,
    right: '28%',
  },
});

export default styles;
