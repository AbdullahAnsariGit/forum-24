import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {appIcons} from '../assets/index';
import {appImages} from '../assets';
import {colors, family, size} from '../utils';
import NavService from '../helpers/NavService';
import Shadows from '../helpers/Shadows';
import CustomText from './CustomText';
import appStyles from '../screens/appStyles';
import Img from './Img';
const {height} = Dimensions?.get('screen');
function AppBackground({
  children,
  title,

  back = false,
  menu = false,
  Rightimage,
  nav = '',
  home = false,
  rightIcon = appIcons.notification,
  marginHorizontal = true,
  rightIconimage,
  resizeMode = 'cover',
  marginBottom,
  homeTitle,
  homeSubtitle,
  homeimage,
  childrenContainerStyle = {},
  OnPressRight,
  homePress,
  rightIconNav = () => {
    NavService.navigate('Notification');
  },
  notification = false,
}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: getStatusBarHeight() * 1,
          flexDirection: 'row',
          backgroundColor: colors?.secondary,
          paddingVertical: height / 25,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: marginBottom,
          borderBottomLeftRadius: home ? 0 : 20,
          borderBottomRightRadius: home ? 0 : 20,
        }}>
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              nav.length
                ? NavService.navigate(nav)
                : back
                ? NavService.closeDrawer(NavService.goBack())
                : NavService.openDrawer();
            }}
            style={{
              position: 'absolute',
              alignItems: 'center',
              // backgroundColor: menu ? colors.primary : 'transparent',
              borderRadius: menu ? 10 : 0,
              left: 5,
              width: 45,
              height: 45,
              justifyContent: 'center',
              // ...Shadows.shadow3,
            }}>
            {back && (
              <Image
                source={appIcons.back}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                  tintColor: colors.primary,
                }}
              />
            )}
            {menu && (
              <Image
                source={appIcons.menu}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                  // tintColor: colors.white,
                }}
              />
            )}
          </TouchableOpacity>

          <View>
            <CustomText
              text={title}
              font={family?.Poppins_Medium}
              size={size?.normal}
              color={colors?.white}
            />
          </View>
          {notification && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('Notifications');
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                // backgroundColor: colors.primary,
              }}>
              <Image
                source={rightIcon}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  resizeMode: resizeMode,
                }}
              />
            </TouchableOpacity>
          )}
          {Rightimage && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={OnPressRight}
              style={{
                position: 'absolute',
                right: 20,
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Image
                source={rightIcon}
                style={{
                  width: 20,
                  height: 20,
                  // borderRadius: 12,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
        </>
      </View>

      {home && (
        <>
          <View
            style={{
              backgroundColor: colors.secondary,
            }}>
            <View
              style={{
                marginTop: -10,
                width: '90%',
                alignSelf: 'center',
                height: 1,
                marginBottom: 10,

                // paddingHorizontal: 10,
                backgroundColor: colors.white,
              }}
            />
            <View
              style={[
                appStyles.directionRow,
                {
                  backgroundColor: colors.secondary,
                  alignItems: 'center',
                  paddingBottom: 15,
                  justifyContent: 'space-between',

                  paddingHorizontal: 20,
                },
              ]}>
              <View style={{}}>
                <Text style={{color: 'white', ...appStyles.font20}}>
                  {homeTitle}
                </Text>
                <Text
                  style={{
                    color: colors.primary,
                    ...appStyles.font25,
                    ...appStyles.family_Poppins_Bold,
                  }}>
                  {homeSubtitle}
                </Text>
              </View>
              <View
                style={{
                  height: 60,
                  width: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                  borderWidth: 2,
                  borderStyle: 'dashed',
                  borderColor: colors.primary,
                }}>
                <TouchableOpacity onPress={homePress}>
                  <Img
                    resizeMode={'cover'}
                    // tintColor={'black'}
                    local
                    style={{height: 50, width: 50, borderRadius: 100}}
                    src={homeimage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      )}

      <View
        style={{
          flex: 1,
          marginHorizontal: !marginHorizontal ? 20 : 0,
          marginBottom: 10,
          overflow: 'visible',
        }}>
        {children}
      </View>
    </View>
  );
}

export default AppBackground;
