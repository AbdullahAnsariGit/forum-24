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
const ListComponent = props => {
  const {
    _item,
    color,
    customStylesRow2,
    onPress,
    customContainer,
    statusColor,
    Board,
    home,
    innerContainer,
    custommiddle,
  } = props;
  return (
    <View
      style={[
        styles?.container,
        {
          paddingHorizontal: 10,
          paddingVertical: 10,
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[styles?.innerContainer, innerContainer]}>
        <View style={styles?.imgWrapper}>
          <CustomIcon
            size={height / 6.5}
            src={_item?.Sales}
            resizeMode="contain"
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
          <CustomText
            text={
              _item?.message?.length <= 25 || home
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
            color={color ? color : colors?.secondary}
            font={family?.Poppins_SemiBold}
            size={size?.xxsmall}
            numberOfLines={2}
          />
          <CustomText
            text={
              _item?.description?.length <= 25 || home
                ? `${_item?.description?.slice(0, 30)}...`
                : _item?.description
            }
            color={color ? color : colors?.black}
            font={family?.Poppins_Medium}
            size={size?.tiny}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ListComponent;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: colors?.white,
    ...Shadows?.shadow3,
  },
  innerContainer: {
    flexDirection: 'row',
    gap: Platform.OS == 'ios' ? 10 : 10,
  },
  middle: {
    marginTop: 4,
    backgroundColor: 'red',
    width: '60%',
  },
  customIconStyle: {
    borderRadius: 20,
  },
  customIconWrapper: {
    borderRadius: 30,
  },
  imgWrapper: {
    alignItems: 'center',
  },
});
