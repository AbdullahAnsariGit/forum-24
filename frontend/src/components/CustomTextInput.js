import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Text,
  Platform,
  Dimensions,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { appIcons } from '../assets';
import { colors, size, family } from '../utils';
import CustomText from './CustomText';
import appStyles from '../screens/appStyles';
import Shadows from '../helpers/Shadows';

export default function CustomTextInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
  const { width } = Dimensions.get('screen');

  const {
    containerStyle,
    types,
    placeholder,
    color,
    placeholderColor,
    verify,
    borderStyles,
    Iconcolor,
    Lineiconcolor,
    Lineicon,
    labeltext,
    label,
    textInputStyles,
    onSubmitEditing,
    search,
    onChangeText,
    rightImage,
    rightimagetext,
    rightImagetintColor,
    multiline,
  } = props;

  return (
    <View style={{}}>
      <View
        style={[
          {
            width: '100%',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white,
            borderRadius: 10,
            paddingHorizontal: 7,
            paddingVertical: 2,
            height: 55,
            borderWidth: 0,
            borderColor: colors.lightGray,
            marginVertical: 0,
            ...Shadows.shadow3,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: Iconcolor,
              marginHorizontal: 10,
            }}
          />
        ) : null}

        {props?.Lineicon ? (
          <Image
            source={props?.Lineicon}
            style={{
              width: 18,
              height: 30,
              resizeMode: 'contain',
              tintColor: Lineiconcolor,
              marginHorizontal: -10,
            }}
          />
        ) : null}
        <View
          style={[
            {
              flex: 1,
              marginLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderLeftWidth: 0,
              borderLeftColor: colors.border,
            },
            borderStyles,
          ]}>
          {/* {label && (
            <CustomText
              text={labeltext}
              style={{
                color: colors.secondary,
                ...appStyles.font14,
                marginLeft: Platform.OS == 'ios' ? 0 : 3,
                ...appStyles.margin1Percent,
                ...appStyles.family_Poppins_SemiBold,
              }}
            />
          )} */}

          <TextInput
            placeholderTextColor={props?.placeholderColor || colors.black}
            multiline={multiline}
            style={[
              {
                flex: 1,
                color: colors.black,
                left: label ? -1 : 0,
                alignItems: 'center',
                top: label ? 7 : 0,
                justifyContent: 'center',
                marginTop: label ? -20 : Platform.OS == 'android' ? 0 : 0,
                fontSize: size.xsmall,
                fontFamily: family.Poppins_Medium,
              },
              textInputStyles,
            ]}
            secureTextEntry={hidden}
            autoCapitalize="none"
            {...props}
          />
          {props?.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setHidden(!hidden)}>
              <Image
                source={!hidden ? appIcons.eye : appIcons.eyeNot}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
          {props?.search && (
            <TouchableOpacity
              activeOpacity={0.8}
            // onPress={() => setHidden(!hidden)}
            >
              <Image
                source={props?.search}
                style={{
                  height: 22,
                  width: 22,
                  marginRight: 10,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
          {props?.rightImage && (
            <View
              style={{
                position: 'absolute',
                right: 5,
                top: 15,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={rightImage}
                style={{
                  tintColor: rightImagetintColor,
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  marginRight: 4,
                }}
              />
              <CustomText
                style={{
                  color: colors.secondary,
                  ...appStyles.family_Poppins_Medium,
                  ...appStyles.font13,
                }}
                text={rightimagetext}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export function ProfileTextInput(props) {
  const { icon } = props;
  return (
    <View
      style={{
        width: '100%',
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.border,
        paddingHorizontal: 10,

        // backgroundColor: colors.cardBackground,
      }}>
      <Image
        source={icon}
        style={{ width: 15, height: 15, resizeMode: 'contain' }}
      />

      <TextInput
        style={{
          width: '100%',
          height: 50,
          color: colors.primary,
          marginLeft: 10,
          fontFamily: family.Outfit_Regular,
        }}
        placeholderTextColor={'#7E7E7E'}
        {...props}
      />
    </View>
  );
}
export function CustomPhoneInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
  const { containerStyle, types, placeholder, color, placeholderColor, verify } =
    props;
  return (
    <View style={{ width: '100%', marginTop: 18 }}>
      {/* <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
        {placeholder}
      </Text> */}
      <View
        style={[
          {
            alignSelf: 'center',
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            borderRadius: 10,
            paddingHorizontal: 7,
            paddingVertical: 5,
            height: 55,
            marginVertical: 0,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: colors.secondary,
              marginHorizontal: 10,
              // marginTop: 5,
            }}
          />
        ) : null}
        <View
          style={{
            flex: 1,

            flexDirection: 'row',
            alignItems: 'center',
            borderLeftWidth: 1,
            borderLeftColor: colors.border,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TextInputMask
              type={'cel-phone'}
              style={{
                flex: 1,
                color: colors.black,
                paddingLeft: 10,
                fontSize: size.small,
              }}
              onChangeText={phoneNumberFormat => {
                let phoneNumber = phoneNumberFormat
                  .toString()
                  .replace(/\D+/g, '');
                props?.onChangePhoneInput(phoneNumberFormat, phoneNumber);
              }}
              maxLength={
                props?.formattedPhoneNumber.toString().startsWith('1') ? 18 : 19
              }
              options={
                props?.phoneNumber.startsWith('1')
                  ? {
                    dddMask: '9 (999) 999 - ',
                  }
                  : {
                    dddMask: '(999) 999 - ',
                  }
              }
              {...props}
            />
            {props.verify && (
              <Text
                style={{
                  color: colors.red,
                  alignSelf: 'center',
                  textDecorationLine: 'underline',
                }}>
                Verify
              </Text>
            )}
          </View>
          {props.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setHidden(!hidden)}>
              <Image
                source={!hidden ? appIcons.Visible : appIcons.Unvisible}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
