import {StyleSheet} from 'react-native';
import appStyles from '../../appStyles';
import {colors} from '../../../utils';
import Shadows from '../../../helpers/Shadows';

const styles = StyleSheet.create({
  mainCont: {
    ...appStyles.mainContainer,
  },

  flexRow: {
    ...appStyles.directionRow,
    ...appStyles.alignCenter,
  },

  title: {
    ...appStyles.family_Poppins_SemiBold,
    color: colors.black,
    ...appStyles.font15,
  },

  messageView: {
    ...Shadows.shadow5,
    ...appStyles.w100,
    height: 50,
    backgroundColor: '#F5F5F5',
    ...appStyles.justifyCenter,
    ...appStyles.alignCenter,
    borderRadius: 100,
    paddingHorizontal: 10,
  },

  textInput: {
    flex: 1,
    height: '100%',
    color: colors.black,
    ...appStyles.font13,
    ...appStyles.family_Poppins_Regular,
    paddingLeft: 10,
  },
  inputCont: {
    // backgroundColor:'red'
  },

  attachmentIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  sendCont: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    ...Shadows.shadow5,

    backgroundColor: colors.primary,
  },

  icon: {
    width: 20,
    height: 20,
  },

  listcont: {
    paddingBottom: 10,
  },
});

export default styles;
