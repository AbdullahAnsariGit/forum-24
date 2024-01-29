import {Dimensions, StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';
const {height, width} = Dimensions?.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  text1: {
    color: 'black',
    ...appStyles.font18,
  },
  ViewText: {
    // backgroundColor: 'pink',
    ...appStyles.margin2Percent,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewText1: {
    // backgroundColor: 'pink',
    // ...appStyles.margin2Percent,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewDetails: {
    color: colors.primary,
    textDecorationLine: 'underline',
    ...appStyles.font16,
    ...appStyles.family_Poppins_SemiBold
  },
  lineSeparator: {
    height: 0.75,
    backgroundColor:colors.gray
  },
});

export default styles;
