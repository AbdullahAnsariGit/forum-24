import React from 'react';
import { Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import { colors, family, size } from '../utils';
import Shadows from '../helpers/Shadows';
const { width } = Dimensions.get('screen');
import { appIcons } from '../assets/index';
import CustomIcon from './CustomIcon';

export default function CustomButton(props) {
  const {
    color,
    title,
    onPress,
    buttonStyle,
    textStyle,
    disabled,
    nextBtn,
    imgSrc,
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          width: "100%",
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color ? color : colors.primary,
          marginTop: '1%',
          borderRadius: 18,
          ...Shadows.shadow5,
          flexDirection: 'row',
          borderRadius: 30,
        },
        buttonStyle,
      ]}>
      {imgSrc && <CustomIcon src={imgSrc} size={18} />}
      <Text
        style={[
          { fontSize: size?.medium, color: colors.white, fontFamily: family?.Poppins_Medium },
          textStyle,
        ]}>
        {title}
      </Text>
      {nextBtn && (
        <Image
          resizeMode="contain"
          source={Icons.next}
          style={{
            height: 22,
            width: 22,
            marginLeft: '4%',
          }}
        />
      )}
    </TouchableOpacity>
  );
}
