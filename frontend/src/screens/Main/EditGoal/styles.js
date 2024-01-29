import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';
import Shadows from '../../../helpers/Shadows';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  emailinput: {
    borderRadius: 40,
    ...Shadows.shadow3,
    paddingTop: 0,

    // backgroundColor:'red'
  },
  dateBtn: {
    borderRadius: 30,
    // marginTop: 10,
    marginHorizontal: 15,
    justifyContent: 'center',
    ...Shadows.shadow3,
    ...appStyles.directionRow,
    alignItems: 'center',
    borderColor: colors.primary,
    justifyContent: 'space-between',
    height: 55,
    width: width - 30,

    paddingHorizontal: 15,
  },
  btn: {
    alignSelf: 'center',
    ...appStyles.margin2Percent,
  },
  placeHolderText: {
    ...appStyles.font15,
    color: colors.black,
  },
  calenderIcon: {
    height: 20,
    width: 20,
  },
});

export default styles;
