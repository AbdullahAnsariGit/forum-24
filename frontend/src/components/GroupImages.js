import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {appIcons, appImages} from '../assets';
import {colors} from '../utils';
import appStyles from '../screens/appStyles';
import {useNavigation} from '@react-navigation/native';

const GroupImages = props => {
  const navigation = useNavigation();
  const groupNo = props.groupNo;

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.center, props?.style]}>
        <View style={[styles.containerImage, props.customContStyle]}>
          <Image source={appIcons.dummy} style={[styles.item]} />
          <Image source={appIcons.dummy1} style={[styles.item]} />
          <Image source={appIcons.dummy2} style={[styles.item]} />
          <Image source={appIcons.dummy3} style={[styles.item]} />
          <View style={[styles.plus, props?.plusIcon]}>
            <Text style={styles.plusTitle}>20</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GroupImages;

const styles = StyleSheet.create({
  center: {
    // marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },

  containerImage: {
    flexDirection: 'row',
    marginLeft: 25,
  },

  item: {
    borderRadius: 100,
    borderColor: colors.white,
    borderWidth: 2,
    height: 30,
    width: 40,
    zIndex: 1111,
    marginLeft: -26,
  },

  plus: {
    borderRadius: 100,
    borderColor: colors.white,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    zIndex: 1111,
    marginLeft: -27,
    padding: 2,
    paddingHorizontal: 7,
  },

  plusTitle: {
    ...appStyles.font11,
    color: colors.white,
  },
});
