import React from 'react';
import { Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
// import Images from '../assets/Images';
import { appLogos } from '../assets/index';

export default ({ size = 200 }) => {
  return (
    <Image
      source={appLogos.appLogo}
      style={{ height: size, width: size, paddingTop: getStatusBarHeight() }}
      resizeMode="contain"
    />
  );
};
