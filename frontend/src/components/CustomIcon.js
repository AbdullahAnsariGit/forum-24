import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

const CustomIcon = props => {
  const {size, src, resizeMode = 'contain', customIconStyle, customIconWrapper, tintColor} = props;
  return (
    <View style={[{height: size, width: size}, customIconWrapper]}>
      <FastImage
        source={src}
        style={[styles?.img, customIconStyle]}
        resizeMode={resizeMode}
        tintColor={tintColor}
      />
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  img: {
    height: '100%',
    width: '100%',
  },
});
