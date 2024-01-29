import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils';
import {fontSize, size} from '../../../utils/sizes';
import appStyles from '../../../screens/appStyles';
import {create} from 'react-test-renderer';
import Shadows from '../../../helpers/Shadows';
const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  modal: {
    width: '100%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    top: Platform.OS == 'ios' ? 13 : 20,
  },
  container: {
    backgroundColor: colors?.white,
    paddingVertical: 18,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  header: {
    backgroundColor: colors?.white,
    paddingBottom:10
  },
  topIcon: {
    borderRadius: 10,
    paddingVertical: 4,
    width: '25%',
    backgroundColor: colors?.gray,
    alignSelf: 'center',
  },
  lineSeparator: {
    height: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray,
    width: '90%',
    alignSelf: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
