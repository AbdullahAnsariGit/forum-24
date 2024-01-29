import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, family, size} from '../utils';
import CustomText from './CustomText';
import CustomIcon from './CustomIcon';
import {appIcons} from '../assets';
import Shadows from '../helpers/Shadows';
const {height, width} = Dimensions?.get('screen');

const ListProgressBar = props => {
  const {
    _item,
    _title1,
    _title2,
    _title3,
    _title4,
    customContainerStyles,
    color,
    customLine,
    stats = true,
    customStylesRow1,
    customStylesRow2,
    disabled,
    onPress,
    progressBarPer,
  } = props;

  console.log('_item', _item);
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles?.headingContainer, customContainerStyles]}>
      <View style={[styles?.heading, customStylesRow1]}>
        <CustomText
          text={_item?.rank ? _item?.rank : _title1}
          color={color ? color : colors?.secondary}
          font={family?.Poppins_Medium}
          size={size?.xsmall}
        />
      </View>
      <View
        style={[
          styles?.line,
          customLine,
        ]}
      />
      <View style={[styles?.headingBig, customStylesRow2]}>
        {_item?.profile && (
          <View style={styles?.imgWrapper}>
            <CustomIcon
              size={height / 18}
              src={_item?.profile}
              resizeMode="cover"
              customIconStyle={styles?.customIconStyle}
              customIconWrapper={styles?.customIconWrapper}
            />
          </View>
        )}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomText
              text={_item?.name ? _item?.name : _title2}
              color={color ? color : colors?.white}
              font={family?.Poppins_Medium}
              size={size?.xsmall}
            />
            <CustomText
              text={_item?.progressper ? _item?.progressper : _title2}
              color={colors?.primary}
              font={family?.Poppins_Medium}
              size={size?.xsmall}
            />
          </View>
          <View style={[styles?.progressBar]}>
            <View
              style={[
                styles?.progressBarInner,
                {width: _item?.progressper},
              ]}></View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListProgressBar;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    backgroundColor: colors?.secondary,
    // justifyContent: 'space-between',
    borderRadius: 30,
    ...Shadows?.shadow3,
    marginHorizontal: 2,
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height / 66,
    width: '20%',
  },
  headingBig: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height / 66,
    flexDirection: 'row',
    paddingLeft:10,
    gap:10
  },
  line: {
    width: 1,
    borderWidth: 1,
    borderColor: colors?.white,
    borderStyle: 'dashed',
  },
  customIconStyle: {
    borderRadius: 30,
  },
  customIconWrapper: {
    borderWidth: 1,
    borderRadius: 30,
    padding: 2,
    borderStyle: 'dashed',
    borderColor: colors?.secondary,
  },
  imgWrapper: {
    height: height / 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rewardWrapper: {
    height: height / 10,
    backgroundColor: colors?.red,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  progressBar: {
    backgroundColor: colors?.backgroundBlue,
    borderRadius: 10,
    width: width / 2,
  },
  progressBarInner: {
    backgroundColor: colors?.primary,
    paddingVertical: 6,
    borderRadius: 10,
  },
});
