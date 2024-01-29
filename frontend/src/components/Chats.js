import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils';
import appStyles from '../screens/appStyles';
import Img from './Img';
import {appIcons} from '../assets';
import Shadows from '../helpers/Shadows';
import {Image} from 'react-native-compressor';

const {width} = Dimensions.get('window');

const Chats = props => {
  const item = props.item;
  const isMine = item.isMine ? true : false;

  console.log(item.message, 'mesagekcurrent');
  return (
    <View
      style={{flexDirection: !isMine ? 'row' : 'row-reverse', marginTop: 20}}>
      {isMine ? null : (
        <View
          style={{
            width: 60,
            height: 60,
            padding: 3,
            borderRadius: 100,
            borderColor: colors.black,
            borderWidth: 1,
            borderStyle: 'dashed',
            ...appStyles.alignCenter,
            ...appStyles.justifyCenter,
          }}>
          <Img
            local
            src={item.image}
            style={styles.userImg}
            resizeMode={'cover'}
          />
        </View>
      )}

      <View>
        <Text style={[styles.username, {textAlign: isMine ? 'right' : 'left'}]}>
          {item.username}
        </Text>

        {item.dataImage ? (
          <View
            style={{
              backgroundColor: isMine ? colors.secondary : colors.white,
              borderRadius: 15,
              // width: width * 0.7,
              padding: 10,
              // borderTopLeftRadius: isMine ? 100 : 0,
              // borderBottomLeftRadius: isMine ? 100 : 40,
              // borderBottomRightRadius: isMine ? 40 : 100,
              borderTopRightRadius: isMine ? 0 : 0,

              ...Shadows.shadow5,
              paddingHorizontal: 20,
              marginLeft: isMine ? 0 : 10,
              marginRight: !isMine ? 0 : 10,
            }}>
            <Img
              src={item?.dataImage}
              resizeMode={'cover'}
              style={{
                width: 210,
                height: 150,
                backgroundColor: colors.grey,
                borderRadius: 15,
              }}
            />
          </View>
        ) : (
          <View
            style={{
              backgroundColor: isMine ? colors.secondary : colors.white,
              paddingVertical: item?.message.length > 10 ? 15 : 8,
              borderTopLeftRadius: isMine ? 40 : 0,
              borderBottomLeftRadius: isMine ? 40 : 40,
              borderBottomRightRadius: isMine ? 40 : 40,
              borderTopRightRadius: isMine ? 0 : 40,
              ...Shadows.shadow5,
              paddingHorizontal: 20,
              marginLeft: isMine ? 0 : 10,
              marginRight: !isMine ? 0 : 10,
            }}>
            {/* {item?.dataImage ? (
              <Img
                src={item?.dataImage}
                resizeMode={'contain'}
                style={{
                  width: 200,
                  height: 150,
                  backgroundColor: colors.grey,
                  borderRadius: 15,
                }}
              /> */}
            {/* ) : ( */}
            <View style={{}}>
              <Text
                // numberOfLines={10}
                style={{
                  alignSelf: 'flex-start',

                  // width:'100%',
                  paddingLeft: isMine ? 0 : 0,
                  paddingRight: isMine ? 0 : 50,
                  maxWidth: 240,
                  // backgroundColor: 'red',

                  color: isMine ? colors.white : colors.black,
                  // textAlign: 'justify',
                }}>
                {item.message}
              </Text>
            </View>
            {/* )} */}
          </View>
        )}

        <Text style={[styles.time, {textAlign: !isMine ? 'left' : 'right'}]}>
          {item?.createdAt}
        </Text>
      </View>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  username: {
    color: colors.secondary,
    ...appStyles.font13,
    ...appStyles.family_Poppins_SemiBold,
    marginTop: 8,
    marginBottom: 10,
    marginHorizontal: 10,
  },

  userImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  message: {
    ...appStyles.font12,
    ...appStyles.family_Poppins_Regular,
    lineHeight: 20,
  },

  time: {
    color: '#848484',
    ...appStyles.font14,
    ...appStyles.family_Poppins_Regular,
    marginVertical: 8,
  },
});
