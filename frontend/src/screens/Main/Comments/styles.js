import {Dimensions, StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';
import Shadows from '../../../helpers/Shadows';
const {height} = Dimensions?.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  containerstyle: {
    flexGrow: 1,
    ...appStyles.margin1Percent,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 25,
    // ...Shadows.shadow5,
  },
  pressAble: {
    // marginTop: 15,
    borderRadius: 30,
    position: 'absolute',
    // top: 0,
    bottom: 10,
    backgroundColor: colors.primary,
  },
  lineSeparator: {
    height: 10,
  },
  btn: {
    borderRadius: 20,
    padding: 8,
    borderRightWidth: 0.1,
    borderLeftWidth: 0.1,
    width: '25%',
    backgroundColor: colors?.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
