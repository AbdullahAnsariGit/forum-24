import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import * as ImageCropPicker from 'react-native-image-crop-picker';

import ActionSheet from 'react-native-actions-sheet';
import {
  Image as ImageCompressor,
  Video as VideoCompressor,
} from 'react-native-compressor';

export default ImagePicker = ({
  children,
  onImageChange = () => {},
  uploadVideo = false,
  isMultiple = false,
  style,
}) => {
  const actionSheetRef = useRef(null);
  const imageChange = method => {
    if (method === 'camera') {
      ImageCropPicker.openCamera({
        mediaType: 'photo',
        cropping: true,
        freeStyleCropEnabled: true,
      }).then(async image => {
        actionSheetRef.current.hide();
        const result = await ImageCompressor.compress(image.path, {
          maxHeight: 400,
          maxWidth: 400,
          quality: 1,
        });
        onImageChange(result, image.mime, 'photo');
      });
    } else if (method === 'gallery') {
      ImageCropPicker.openPicker({
        // multiple: isMultiple,
        mediaType: 'photo',
        cropping: true,
        freeStyleCropEnabled: true,
      }).then(async image => {
        actionSheetRef.current.hide();
        let result;
        if (isMultiple) {
          onImageChange(image, image[0]?.mime, 'photo');
        } else {
          result = await ImageCompressor.compress(image.path, {
            maxHeight: 400,
            maxWidth: 400,
            quality: 1,
          });
          onImageChange(result, image.mime, 'photo');
        }
      });
    } else if (method === 'video') {
      ImageCropPicker.openPicker({
        mediaType: 'video',
      }).then(async video => {
        actionSheetRef.current.hide();
        const result = await VideoCompressor.compress(video.path, {
          compressionMethod: 'auto',
        });
        onImageChange(result, video.mime, 'video');
      });
    }
  };
  return (
    <TouchableOpacity
      onPress={() => actionSheetRef.current.show()}
      style={style}>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{backgroundColor: 'white'}}>
        <View style={{padding: 10}}>
          <View
            style={{
              backgroundColor: 'rgba(241,241,241,0.8)',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                borderBottomWidth: 1.5,
                borderBottomColor: '#ccc',
                paddingVertical: 10,
              }}>
              <Text style={{color: 'grey', textAlign: 'center'}}>
                Choose an option to pick an Image
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                // ref.hide()
                imageChange('camera');
              }}
              style={{
                paddingVertical: 12,
                alignItems: 'center',
                borderBottomWidth: 1.5,
                borderBottomColor: '#ccc',
              }}>
              <Text style={{color: 'rgb(0,88,200)', fontSize: 18}}>
                Take Photo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // ref.hide()
                imageChange('gallery');
              }}
              style={{
                paddingVertical: 12,
                alignItems: 'center',
                borderBottomWidth: 1.5,
                borderBottomColor: '#ccc',
              }}>
              <Text style={{color: 'rgb(0,88,200)', fontSize: 18}}>
                Choose from Library
              </Text>
            </TouchableOpacity>
            {uploadVideo && (
              <TouchableOpacity
                onPress={() => {
                  // ref.hide()
                  imageChange('video');
                }}
                style={{paddingVertical: 12, alignItems: 'center'}}>
                <Text style={{color: 'rgb(0,88,200)', fontSize: 18}}>
                  Upload A Video
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            onPress={() => actionSheetRef.current.hide()}
            style={{
              backgroundColor: 'rgba(241,241,241,0.8)',
              borderRadius: 10,
              paddingVertical: 12,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'rgb(0,88,200)',
                fontSize: 18,
                fontWeight: '600',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
      {children}
    </TouchableOpacity>
  );
};
