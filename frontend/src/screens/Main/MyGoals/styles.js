import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
const {height, width} = Dimensions?.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchWrapper: {
    position: 'relative',
    top: -height * 0.057,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerStyle: {
    borderRadius: 40,
    width: width / 1.35,
  },
  textInputStyles: {
    fontFamily: family?.Poppins_Italic,
    alignSelf: 'center',
  },
  borderStyles: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  lineSeparator: {
    height: height / 64,
  },
  customContainerStyles: {
    backgroundColor: colors?.white,
    borderRadius: 50,
  },
  customStylesRow2: {
    flexDirection: 'row',
    gap: 10,
    width: '50%',
  },
  customStylesRow3: {
    width: '25%',
  },
  gap: {
    height: Platform.OS == 'ios' ? 15 : 12,
  },
  circle: {
    borderRadius: 40,
    backgroundColor: colors?.primary,
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    backgroundColor: 'red',
  },
  buttonStyle: {
    backgroundColor: colors?.primary,
    width: '40%',
  },
  tabsHandle: {
    backgroundColor: colors?.white,
    borderRadius: 20,
    flexDirection: 'row',
  },
  footer: {
    position: 'relative',
    bottom: height * 0.15,
    alignSelf:'center',
  },
});

export default styles;
