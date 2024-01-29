import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import Shadows from '../../../helpers/Shadows';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
  },
  headertext: {
    // marginVertical: '8%',
    // alignSelf:'center',
    top: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  title: {
    // bottom: '10%',
    alignSelf: 'center',
    color: colors.white,
    fontWeight: '800',
    fontSize: size.large,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  subText: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.white,
    backgroundColor: 'red',
    marginVertical: 20,
  },
  textNormal: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.white,
  },
  main: {
    // bottom:'7%'
    marginTop: 20,
  },
  textNormalWithColor: {
    color: colors.primary,
    textDecorationColor: colors.primary,
    fontSize: 17,
    fontWeight: '700',
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  logo: {
    marginTop: 20,
  },

  // phone
  phoneContainer: {
    padding: 1,
    height: 60,
    marginTop: 20,
    width: width - 30,
    borderRadius: 20,
    borderColor: colors.red,
    backgroundColor: "transparent",
  },
  countryPickerButtonStyle: {
    width: 55,
    borderRadius: 20,
    height: 50,
    backgroundColor: colors.white,
    ...Shadows.shadow5,
  },
  textContainerPhone: {
    marginLeft: 10,
    borderRadius: 30,
    height: 50,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems:'center',
    ...Shadows.shadow5,
  },
  pressAble: {
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: colors.primary,
  },
  smallButton: {
    width: 330,
  },
});

export default styles;
