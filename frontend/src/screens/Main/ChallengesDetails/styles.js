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
    borderRadius: 50,
  },
  lineSeparator: {
    height: height / 64,
  },
  gap: {
    height: Platform.OS == 'ios' ? 30 : 20,
  },
  customIconWrapper: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors?.white,
    marginLeft: -20,
  },
  customIconStyle: {
    borderRadius: 50,
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  participantContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 0.5,
    borderTopColor: colors?.gray,
  },
});

export default styles;
