import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {colors, family, size} from '../utils';
import appStyles from '../screens/appStyles';
import ProfileImage from './ProfileImage';
import {appIcons, appImages} from '../assets';
import Img from './Img';
import CustomButton from './CustomButton';
import NavService from '../helpers/NavService';
import {TouchableOpacity} from 'react-native';
import CustomIcon from './CustomIcon';
import {multiImages} from '../utils/dummyData';

const CustomSingleList2 = ({item, Details, GoalDetails}) => {
  return (
    <View
      style={[
        styles?.container,
        {justifyContent: item?.name ? 'space-between' : 'flex-start'},
      ]}>
      {item?.icon ? (
        <CustomIcon src={item?.icon} size={size?.large} />
      ) : (
        <CustomText
          text={item?.name}
          color={colors?.black}
          font={family?.Poppins_Medium}
          size={size?.xsmall}
        />
      )}
        {item?.description ? (
          <CustomText
            text={item?.description}
            color={colors?.black}
            font={family?.Poppins_Light}
            size={size?.xxsmall}
            style={{flex:1}}
          />
        ) : (
          <View style={styles?.imagesContainer}>
            {item?.multiImages?.map(_item => {
              return (
                <CustomIcon
                  customIconWrapper={styles?.customIconWrapper}
                  customIconStyle={styles?.customIconStyle}
                  src={_item?.img}
                  size={size?.h2}
                  resizeMode="cover"
                />
              );
            })}
            <CustomText
              text={item?.userCount}
              color={colors?.black}
              font={family?.Poppins_Light}
              size={size?.xsmall}
            />
          </View>
        )}
    </View>
  );
};

export default CustomSingleList2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  customIconWrapper: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors?.white,
    marginLeft: -20,
  },
  customIconStyle: {
    borderRadius: 50,
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
