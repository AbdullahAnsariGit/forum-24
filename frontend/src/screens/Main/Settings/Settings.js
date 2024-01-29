import React, {Component} from 'react';
import {
  Linking,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  Dimensions,
  Share,
  Platform,
} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import {appIcons} from '../../../assets';
import styles from './styles';
import Img from '../../../components/Img';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils';
import appStyles from '../../appStyles';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
const {width} = Dimensions.get('screen');

class Settings extends Component {
  constructor(props) {
    super(props);
    const {user} = this?.props;
    this.state = {
      index: 0,
      set: '',
      geo: '',
      sharing: false,
      isNotification: '',
      isGeoLocation: '',
    };
  }

  shareMessage = async () => {
    const {isGeoLocation, isNotification, sharing} = this.state;

    if (sharing) return;

    this.setState({sharing: true}); // Set the sharing flag to true

    setTimeout(async () => {
      try {
        const result = await Share.share({
          message: 'Hello, I am sharing this text!',
        });

        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            console.log(`Shared via ${result.activityType}`);
          } else {
            console.log('Shared successfully');
          }
        } else if (result.action === Share.dismissedAction) {
          console.log('Share sheet dismissed');
        }
      } catch (error) {
        console.error('Error sharing:', error.message);
      } finally {
        setTimeout(() => this.setState({sharing: false}), 500); // Reset the sharing flag after a delay
      }
    }, 100);
  };

  render() {
    const {isGeoLocation, isNotification, sharing} = this.state;

    const methods = [
      {
        name: 'Terms & Conditions',
        icon: appIcons.terms,
        onPress: () => Linking.openURL('https://google.com'),
        color: colors.primary,
      },
      {
        name: 'Privacy Policy',
        icon: appIcons.myprofile,
        color: colors.primary,
        onPress: () => Linking.openURL('https://google.com'),
      },
      {
        name: 'About App',
        icon: appIcons.info,
        color: colors.primary,
        onPress: () => navigation.navigate('AboutApp'),
      },
      {
        name: 'Share App',
        icon: appIcons.share,
        color: colors.primary,
        onPress: this.shareMessage,
      },
      {
        name: 'Rate & Share',
        icon: appIcons.rate,
        color: colors.primary,
        // onPress: () => navigation.navigate('AboutApp'),
      },
    ];
    const {navigation} = this.props;

    return (
      <AppBackground
        newBack
        leftIcon={appIcons.back}
        title={'Settings'}
        marginHorizontal={false}
        back>
        <View style={appStyles.margin1Percent}>
          <View style={styles.viewStyle1}>
            <Img
              tintColor={colors.secondary}
              local
              src={appIcons.notification}
              style={[styles.buttonInnerImage, {left: width / 50}]}
            />
            <CustomText text="Push Notifications  " style={styles.textStyle1} />
            <Switch
              style={{
                transform: [
                  {scaleX: Platform.OS == 'android' ? 0.99 : 0.8},
                  {scaleY: Platform.OS == 'android' ? 0.99 : 0.8},
                ],
              }}
              trackColor={{false: '#E4E4E4', true: '#10B5FA'}}
              thumbColor={isNotification ? 'white' : 'white'}
              ios_backgroundColor={isNotification ? colors.red : colors.white}
              value={isNotification}
              onValueChange={newValue => {
                if (newValue) {
                  Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Notification is on',
                    visibilityTime: 2000,
                  });
                } else {
                  Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Notification is off',
                    visibilityTime: 2000,
                  });
                }
                this.setState({isNotification: newValue});
              }}
            />
          </View>

          <View style={styles.viewStyle2}>
            <View style={styles.space}>
              {methods.map((method, i) => {
                const {color, name, icon, onPress} = method;
                return (
                  <TouchableOpacity
                    onPress={onPress}
                    key={i}
                    activeOpacity={0.8}
                    style={[styles.buttonContainer, {backgroundColor: color}]}>
                    <Img
                      tintColor={colors.white}
                      local
                      src={icon}
                      style={styles.buttonInnerImage}
                    />
                    <CustomText text={name} style={styles.buttonInnerText} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          
        </View>
      </AppBackground>
    );
  }
}

export default Settings;
