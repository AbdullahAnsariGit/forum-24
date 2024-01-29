import {StyleSheet} from 'react-native';
import {WP, HP, colors, platform} from '../utils';
let ios = platform === 'ios';

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: HP(1.5),
    textTransform: 'none',
    // marginBottom: ios?HP(0):HP(1),
  },
  tabBarStyle: {
    height: 50,
  },
  tabScreen: {
    height: 50,
  },
});

export default styles;
