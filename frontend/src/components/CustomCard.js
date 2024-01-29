import {
  Dimensions,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Img from './Img';
import CustomText from './CustomText';
import {colors, family, size} from '../utils';
const {height, width} = Dimensions?.get('screen');

const CustomCard = ({item, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.maincontainer}>
      <Img src={item?.image} style={styles.img} local resizeMode={'cover'} />

      <View style={styles.container}>
        <CustomText
          text={item?.name}
          color={colors?.secondary}
          font={family?.Poppins_Medium}
          size={size?.xsmall}
        />
        <CustomText
          text={item?.status}
          color={colors?.black}
          font={family?.Poppins_SemiBold}
          size={size?.xtiny}
        />
      </View>
      <CustomText
        text={item?.description}
        color={colors?.gray}
        font={family?.Poppins_Medium}
        size={size?.tiny}
        numberOfLines={2}
        style={{marginTop: 8}}
      />
    </TouchableOpacity>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: colors?.white,
    padding: 5,
    width: width / 2.3,
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 5,
  },
  img: {
    height: 120,
    width: '100%',
    borderRadius: 10,
  },
});
