import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {colors, size} from '../utils';
import appStyles from '../screens/appStyles';
import ProfileImage from './ProfileImage';
import {appIcons, appImages} from '../assets';
import Img from './Img';
import CustomButton from './CustomButton';
import NavService from '../helpers/NavService';
import {TouchableOpacity} from 'react-native';

const CustomSingleList = ({item, Details, GoalDetails ,user}) => {
  console.log(item, 'itemaaaa');
  return (
    <>
      <View
        style={[
          appStyles.directionRow,
          appStyles.justifySpaceBetween,
          appStyles.alignCenter,
          appStyles.paddingVertical_1,
        ]}>
        <View style={{flex: GoalDetails ? 0 : 3}}>
          <CustomText
            text={item?.heading}
            size={size.xxsmall}
            style={{
              ...appStyles.family_Poppins_SemiBold,
              color: colors.secondary,
            }}
          />
          {item?.location == false ? (
            <View style={[appStyles.directionRow, {gap: 15, marginTop: 5}]}>
              <View
                style={{
                  height: 100,
                  width: 155,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderRadius: 5,
                  borderStyle: 'dashed',
                }}>
                <Img
                  resizeMode={'cover'}
                  local
                  src={{uri : item?.imgBack}}
                  style={styles.maplocation}
                />
              </View>
              <View
                style={{
                  // backgroundColor: 'red',
                  height: 100,
                  width: 155,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderStyle: 'dashed',
                }}>
                <Img
                  resizeMode={'cover'}
                  local
                  src={{uri : item?.imgFront}}
                  style={styles.maplocation}
                />
              </View>
            </View>
          ) : (
            ''
          )}
        </View>

        <View style={styles.rightContainer}>
          {item?.verify == true ? (
            <View style={{marginRight: 7}}>
              <Img
                resizeMode={'contain'}
                tintColor={colors.primary}
                local
                src={appIcons.verify}
                style={{height: 15, width: 15, bottom: 4, top: 0}}
              />
            </View>
          ) : (
            <View style={{}}>
              <Img local src={item?.image} style={[styles.icon, {top: 5}]} />
            </View>
          )}
          {item?.active == true && (
            <View
              style={{
                marginRight: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: 'lightgreen',
                  borderRadius: 100,
                }}></View>
            </View>
          )}
          <CustomText
            color={colors.gray}
            text={item?.subHeading}
            size={size.tiny}
            style={[appStyles.family_Poppins_Medium]}
            numberOfLines={3}
          />
        </View>
      </View>
      <View>
        {item?.map == false ? (
          <TouchableOpacity
            onPress={() => NavService.navigate('EventLocation')}
            style={styles.map}>
            <Img
              tintColor={colors.primary}
              src={appIcons.map}
              style={styles.follow}
              local
              resizeMode={'contain'}
            />
            <CustomText text={'View Map'} style={styles.btntext} />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

export default CustomSingleList;

const styles = StyleSheet.create({
  map: {
    borderRadius: 30,
    paddingVertical: 6,
    ...appStyles.w_22,
    top: -5,
    marginTop: -10,
    alignSelf: 'flex-end',
    // alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    // paddingHorizontal: 10,
    ...Shadows.shadow3,
  },
  rightContainer: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    ...appStyles.directionRow,
    // backgroundColor:'red',
    alignItems:'center'
    // ...appStyles.gap_10,
  },
  icon: {
    height: 30,
    width: 30,
  },
  // maplocation: {
  //   height: 150,
  //   width: 310,
  //   // ...appStyles.margin1Percent,
  // },
  buttonStyles: {
    height: 45,
    backgroundColor: colors.white,
    // borderWidth: 1,
    ...appStyles.w_22,
    borderColor: colors.primary,
  },
  buttonText: {
    fontSize: size.tiny,
    color: colors.primary,
  },
  follow: {
    height: 12,
    width: 12,
  },
  btntext: {
    color: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    left: 3,
    ...appStyles.marginLeft,
    ...appStyles.font11,
    ...appStyles.family_Montserrat_Medium,
  },
  maplocation: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    // height: 110,
    // width: 200,
  },
});
