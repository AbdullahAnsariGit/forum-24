import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colors, size} from '../utils';
import {appIcons, appImages} from '../assets';
import {useTheme} from '@react-navigation/native';
import Img from './Img';

const ImageSelectedView = ({
  onPress = () => {},
  item,
  removeImage = () => {},
  addHunting,
  backgroundColor,
  color,
  borderColor,
}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.wrapper]}>
      {item?.type?.includes('image') ? (
        <Img
          resizeMode="cover"
          style={styles.backgroundForGalleryAsset}
          src={item?.uri}
        />
      ) : item?.type?.includes('video') ? (
        <>
          <TouchableOpacity>
            <Img
              local
              resizeMode="cover"
              style={[
                styles.backgroundForGalleryAsset,
                {
                  opacity: 0.8,
                },
              ]}
              src={appImages?.backgroundImage}
            />
            <Img local style={styles.playIcon} src={appIcons?.play} />
          </TouchableOpacity>
        </>
      ) : null}
      <View style={styles.crossIconView}>
        <TouchableOpacity
          onPress={() => {
            removeImage(item);
          }}
          style={[styles.crossBtn]}>
          <Img
            local
            src={appIcons.cross}
            style={{height: 30, width: 30, right: 20, bottom: 10}}
          />
          {/* <Text style={[styles.crossText, {color: color}]}>x</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageSelectedView;

const styles = StyleSheet.create({
  wrapper: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    position: 'relative',
  },
  backgroundForGalleryAsset: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  crossIconView: {
    position: 'absolute',
    // zIndex: 100,
    // right: 5,
    alignSelf: 'flex-end',
    // bottom: 65,
    top: 6,
    left: 86,
    borderRadius: 20,
    // top: 0.7,
    // backgroundColor:'red'
  },
  crossBtn: {
    borderRadius: 100,
    width: 15,
    height: 15,
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossText: {
    fontSize: size.medium,
    alignSelf: 'center',
    bottom: 5,
    // marginBottom: 5,
    color: colors.red,
  },
  playIcon: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    position: 'absolute',
    top: '35%',
    left: '35%',
  },
});
