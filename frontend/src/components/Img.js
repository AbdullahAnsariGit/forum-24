import React from 'react';
import FastImage from 'react-native-fast-image';

const Img = ({src, local, style, resizeMode, tintColor}) => {
  return (
    <FastImage
      style={style}
      source={
        local
          ? src
          : {
              uri: src,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.web,
            }
      }
      tintColor={tintColor && tintColor}
      resizeMode={resizeMode}
    />
  );
};

export default Img;
