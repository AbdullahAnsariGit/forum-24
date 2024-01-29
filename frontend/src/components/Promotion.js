import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, family, size} from '../utils';
import CustomIcon from './CustomIcon';
import CustomText from './CustomText';
import Shadows from '../helpers/Shadows';
import appStyles from '../screens/appStyles';
const {height, width} = Dimensions?.get('screen');
const Promotions = props => {
  const {
    _item,
    color,
    customStylesRow2,
    onPress,
    customContainer,
    statusColor,
    Board,
    innerContainer,
    custommiddle,
  } = props;
  return (
    <View style={[styles?.container]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[styles?.innerContainer, innerContainer]}>
        <View style={styles?.imgWrapper}>
          <CustomIcon
            size={height / 5}
            src={_item?.Sales}
            resizeMode="cover"
            customIconStyle={styles?.customIconStyle}
            customIconWrapper={styles?.customIconWrapper}
          />
        </View>
        <View style={[styles?.middle]}>
          {/* <CustomText
                text={_item?.name ? _item?.name : _title2}
                color={color ? color : colors?.secondary}
                font={family?.Poppins_SemiBold}
                size={size?.small}
              /> */}
          <View
            style={[
              appStyles.directionRow,
              {...appStyles.justifySpaceBetween},
            ]}>
            <CustomText
              text={
                _item?.message?.length <= 25
                  ? `${_item?.message?.slice(0, 12)}...`
                  : _item?.message
              }
              color={color ? color : colors?.secondary}
              font={family?.Poppins_SemiBold}
              size={size?.xxsmall}
              numberOfLines={2}
            />
            <CustomText
              text={_item?.status}
              color={color ? color : colors?.primary}
              font={family?.Poppins_SemiBold}
              size={size?.xxsmall}
              numberOfLines={2}
            />
          </View>
          <CustomText
            text={
              _item?.description?.length <= 25
                ? `${_item?.description?.slice(0, 30)}...`
                : _item?.description
            }
            // text={_item?.description}
            color={color ? color : colors?.gray}
            font={family?.Poppins_Medium}
            size={size?.tiny}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Promotions;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: colors?.white,
    paddingHorizontal: width / 25,
    paddingVertical: height / 90,
    ...Shadows?.shadow3,
  },
  innerContainer: {
    flex: 1,
    gap: 5,
  },
  middle: {
    // flex: 2,
    marginTop: 4,
  },
  customIconStyle: {
    // backgroundColor: 'red',
    borderRadius: 20,
    width: '100%',
  },
  customIconWrapper: {
    borderRadius: 30,
    width: '100%',

    // backgroundColor: 'red',
  },
  imgWrapper: {
    alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
  },
});
