import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, family, size} from '../utils';
import CustomText from './CustomText';

const {height} = Dimensions.get('screen');

const CustomTabView = ({
  item,
  width,
  btnWidth,
  onPress,
  isActive,
  customContainer,
}) => {
  const renderItem = ({item: _item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.btn,
        {
          backgroundColor:
            isActive === _item.id ? colors.primary : colors.white,
          width: btnWidth,
        },
      ]}
      onPress={() => onPress(_item.id)}>
      <CustomText
        size={size.normal}
        font={family.Poppins_Medium}
        color={isActive === _item.id ? colors.white : colors.black}
        text={_item.btn}
      />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {width: width}, customContainer]}>
      <FlatList
        horizontal
        data={item}
        renderItem={renderItem}
        keyExtractor={_item => _item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CustomTabView;

const styles = StyleSheet.create({
  container: {
    height: height * 0.06,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  btn: {
    borderRadius: 30,
    height: height * 0.05,
    backgroundColor: colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: family.Poppins_Medium,
    color: colors.white,
  },
});
