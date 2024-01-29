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

  customIcon: {
    borderRadius: 30,
  },
  customIcon: {
    borderWidth: 1.4,
    borderRadius: 30,
    padding: 2,
    borderStyle: 'dashed',
    borderColor: colors?.primary,

  },
  headingBig: {
    flexDirection: 'row',
    backgroundColor: colors?.backgroundBlue,
    borderRadius: 10,
    alignItems:'center',
    ...Shadows?.shadow3,
    marginHorizontal: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap:10,
  },
  customRankIcon:{

  },
  customRankIconWrap:{
    position:'absolute',
    top:-10,
    right:0
  }
  // heading: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: height / 66,
  //   width: '20%',
  // },
  // headingBig: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: height / 66,
  //   width: '30%',
  // },
});

export default styles;
