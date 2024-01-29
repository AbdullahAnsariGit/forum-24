import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Img from './Img';
import CustomText from './CustomText';
import {colors, family, size} from '../utils';

const CustomCardList = ({item, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles?.container}
      onPress={onPress}>
      <View>
        <Img src={item?.Sales} local style={styles?.img} />
      </View>
      <View style={{flex: 1}}>
        <CustomText
          text={item?.message}
          size={size?.xsmall}
          font={family?.Poppins_SemiBold}
          color={colors?.secondary}
        />
        <CustomText
          text={item?.description}
          size={size?.xxsmall}
          font={family?.Poppins_Medium}
          color={colors?.gray}
          numberOfLines={3}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CustomCardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.white,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
});
