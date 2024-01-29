import {Dimensions, StyleSheet} from 'react-native';

import appStyles from '../../appStyles';
import {colors} from '../../../utils';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
        // backgroundColor:'red',
        marginHorizontal:10,
        marginTop:10,
        gap:2,
        ...appStyles.family_Poppins_SemiBold,
  },
  heading: {
    color: colors.primary,
    ...appStyles.font16,
    ...appStyles.family_Poppins_Bold,
    marginBottom: 10,
  },
  para: {
    ...appStyles.family_Poppins_SemiBold,
    // ...appStyles.margin1Percent,
    color: colors.darkGray,
    lineHeight: 20,
    width: '95%',
    alignSelf: 'center',
    textAlign: 'justify',
    ...appStyles.family_Poppins_Medium,
  },
  heading: {
    color: colors.secondary,
    ...appStyles.font15,
  },
   heading1: {
    color: colors.primary,
    ...appStyles.font15,
    ...appStyles.family_Poppins_SemiBold
  },
});
export default styles;
