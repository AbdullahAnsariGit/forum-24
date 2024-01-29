import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../../utils';
import {getStatusBarHeight} from 'react-native-status-bar-height';
const {height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  slide: {
    backgroundColor: colors.white,
    flex: 1,
    // marginTop: getStatusBarHeight(),
  },
  image: {
    width: '100%',
    height: '40%',
  },
  text: {
    fontSize: 16,
    fontFamily: family.Poppins_Bold,
    fontSize: size.medium,
    color: colors.black,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtheading: {
    // alignSelf: 'flex-end',
    // marginRight: 15,
    // marginVertical: 10,
    fontSize: size.normal,
    fontFamily: family.Poppins_Bold,
    color: colors.black,
  },
  text1: {
    fontFamily: family.Poppins_Medium,
    fontSize: size.small,
    color: colors.black,
  },
  header: {
    backgroundColor: colors.lightwhite,
    marginTop: 30,
    paddingHorizontal: 25,
    paddingVertical: 20,
    flex: 1,
  },
  btncontainer: {position: 'absolute', bottom:Platform.OS == 'ios' ?  30 :20, alignSelf: 'center'},
  inactivedot: {
    bottom: Platform.OS == 'ios' ? '55%' : '50%',
    right: 150,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.lightwhite,
  },
  activedot: {
    bottom: Platform.OS == 'ios' ? '55%' : '50%',
    right: 150,
    borderColor: colors.secondary,
    borderWidth: 1,
    backgroundColor: colors.secondary,
  },
  skipbutton:{
    backgroundColor: colors.white,
    alignItems: 'flex-end',
    padding: 15,
  }
});