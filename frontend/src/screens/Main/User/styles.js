import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
const {height} = Dimensions?.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    borderRadius: 40,
    position: 'absolute',
    width: '100%',
    top: -height * 0.057,
  },
  textInputStyles: {
    fontFamily: family?.Poppins_Italic,
    alignSelf: 'center',
  },
  borderStyles: {
    flexDirection: 'row',
    alignItems: 'center',
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
    height: Platform.OS == 'ios' ? 30 : 20,
  },
});

export default styles;
