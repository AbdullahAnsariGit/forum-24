import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
const {height} = Dimensions?.get('screen');

const styles = StyleSheet.create({
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
    height: Platform.OS == 'ios' ? 15 : 12,
  },
  Customtext: {
    alignItems: 'center',
    justifyContent: 'centers',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  customIconStyle: {
    borderRadius: 50,
  },

  customIconWrapper: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors?.white,
    marginLeft: -20,
  },
});

export default styles;
