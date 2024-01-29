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
  wrapperstyles: {
    marginTop: 0,
    width: '92%',
  },
  phoneContainer: {
    padding: 1,
    height: 55,
    borderWidth: 1,
    width: width - 20,

    // width: WP('88%'),
    borderRadius: 30,
    borderColor: colors.secondary,
    backgroundColor: colors.white,
  },
  countryPickerButtonStyle: {
    width: 55,
    borderRadius: 30,
    height: 50,
    backgroundColor: colors.white,
  },
  textContainerPhone: {
    marginLeft: 10,
    borderRadius: 30,
    height: 50,
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  uploadView: {
    marginLeft: 10,
    marginVertical: 10,
  },
  uploaddocuments: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  textInputStyles: {
    // backgroundColor:'red'
  },
  uploaddoctext: {
    ...appStyles.font15,
    color: colors.black,
    ...appStyles.family_Poppins_SemiBold,
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
    width: 160,
    ...Shadows.shadow5,
    backgroundColor: '#94E5FD',
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
