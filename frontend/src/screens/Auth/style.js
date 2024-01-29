import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../utils';

// const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  w_100: {
    width: WP('100%'),
  },
  w_95: {
    width: WP('95%'),
  },
  w_90: {
    width: WP('90%'),
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
  directionRow: {
    flexDirection: 'row',
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
  buttonContainer: {
    backgroundColor: colors.primary,
    width: WP('60%'),
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: HP('2%'),
  },
  colorWhite: {
    color: colors.white,
  },
  font16: {
    fontSize: size.normal,
  },
});

export default styles;
