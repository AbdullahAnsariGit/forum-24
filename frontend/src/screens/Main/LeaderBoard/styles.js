import {Dimensions, StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
const {height, width} = Dimensions?.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  customContainerStyles: {
    backgroundColor: colors?.white,
    borderRadius: 10,
  },
  lineSeparator: {
    height: height / 64,
  },
  gap: {
    height: Platform.OS == 'ios' ? 30 : 20,
  },
});

export default styles;
