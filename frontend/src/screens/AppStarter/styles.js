import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../utils';
import appStyles from '../appStyles';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
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
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    height: 60,
    justifyContent: 'center',
  },
  buttonInnerImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: colors.white,
    position: 'absolute',
    left: width / 8,
  },
  buttonInnerText: {
    fontWeight: 'bold',
    // fontSize: 15,
    ...appStyles.font15,
    color: colors.white,
    position: 'absolute',
    left: width / 4,
  },
  terms: {
    color: colors.secondary,
    // top: 7,
    marginLeft: 2,
    padding: 2,
    ...appStyles.font14,
    // ...appStyles.family_Jost_Medium,
    ...appStyles.family_Poppins_Bold,
  },
  txt2: {
    color: colors.black,
    alignSelf: 'center',
    ...appStyles.font14,
    ...appStyles.family_Poppins_SemiBold,
  },
  txt1: {
    color: colors.black,
    ...appStyles.font14,
    ...appStyles.family_Poppins_SemiBold,
    alignSelf: 'center',
    ...appStyles.family_Jost_Bold,
  },
  txt3: {
    color: colors.secondary,
    alignSelf: 'center',
    ...appStyles.font14,
    ...appStyles.fontBold,

    // top: 2,
    marginLeft: 2,
    marginBottom: Platform.OS == 'android' ? 2 : 0,
    // ...appStyles.family_Jost_Medium,
  },
  bottomView: {
    bottom: 0,
    position: 'absolute',
    paddingBottom: Platform.OS == 'ios' ? 20 : 10,
  },
  main: {
    ...appStyles.directionRow,
    // marginTop: 5,
    // backgroundColor:'red',
    alignItems: 'center',
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  space: {
    paddingVertical: 20,
  },
});

export default style;
