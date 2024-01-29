import React from 'react';
import {Text, View} from 'react-native';

import styles from './style';
import {appLogos} from '../assets';
import Img from './Img';
import {colors, platform} from '../utils';

let ios = platform === 'ios';

const StatusBarHeader = () => {
  return (
    <View style={styles.StatusBarContainer}>
      <Img
        local={true}
        resizeMode={'contain'}
        style={[styles.spLogoSize, !ios && styles.center]}
        tintColor={colors.white}
        src={appLogos.appIcon}
      />
      <Text style={styles.statusBarText}>{'bistrochatManager'}</Text>
    </View>
  );
};

export default StatusBarHeader;
