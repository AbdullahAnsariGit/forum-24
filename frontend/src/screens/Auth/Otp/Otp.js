import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Image,
  Keyboard,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {appLogos} from '../../../assets/index';
import CustomBackground from '../../../components/CustomBackground';
import CustomText from '../../../components/CustomText';
import {otpVerify, resendOTP} from '../../../redux/actions/authAction';
import {colors} from '../../../utils';
import {getDeviceToken} from '../../../redux/actions/appAction';

import styles from './styles';

const Otp = ({navigation, route}) => {
  const {user_id, phoneNumbers, verified} = route.params;
  let timer;
  const [code, setCode] = useState('');
  const [timerCode, setTimerCode] = useState(59);
  const [resend, setResend] = useState(false);
  const [key, setKey] = useState(0);
  const dispatch = useDispatch();

  const handleCodeFilled = async code => {
    setCode(code);
    const {role, phoneNumbers, mail} = route?.params;
    if (!code || code.length === 0) {
      Toast.show({
        text1: 'OTP field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (code !== '123456') {
      Toast.show({
        text1: 'Invalid OTP verification code.',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      const fcmtoken = await getDeviceToken();
      let payload = {
        user_id: user_id,
        verified_code: code,
        device_type: Platform.OS,
        device_token: fcmtoken ? fcmtoken : 'fcmtoken',
      };
      Keyboard.dismiss();
      dispatch(otpVerify(payload));
    }
  };
  const onCompleteTimer = () => {
    setResend(true);
  };
  const handleReset = () => {
    const phoneAlert =
      'OTP verification code has been resend to your Phone Number.';
    const emailAlert =
      'OTP verification code has been resend to your Email Address.';
    if (resend) {
      Keyboard.dismiss();
      setTimerCode(59);
      let payload = {
        user_id: user_id,
      };
      dispatch(resendOTP(payload));
      setResend(false);
      setCode('');
      setKey(prevKey => prevKey + 1);
    } else {
      Toast.show({
        text1: 'Please wait until the timer finishes!',
        type: 'error',
        visibilityTime: 3000,
      });
    }
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  const handleBackPress = () => {
    navigation.navigate('AppStarter');
    return true;
  };

  return (
    <CustomBackground
      onBack
      showLogo={false}
      backgroundImage
      titleText={'Verification'}
      back={true}>
      <View style={styles.container}>
        <View style={[styles.container, {marginTop: 0}]}>
          <View style={styles.logoStyle}>
            <Image style={styles.applogo} source={appLogos.appLogo} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.title}>
              We have sent you a six-digits onetime {'\n'} password on your
              email address / phone {'\n'} number with instructions. Please
              follow the {'\n'} instructions to sign-in.
            </Text>
          </View>
          <OTPInputView
            selectionColor="black"
            keyboardType="numeric"
            style={styles.otpInput}
            pinCount={6}
            autoFocusOnLoad={false}
            onCodeChanged={c => setCode(c)}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={c => handleCodeFilled(c)}
            code={code}
          />
          <View style={styles.clock}>
            <CountdownCircleTimer
              isPlaying
              rotation={'counterclockwise'}
              key={key}
              duration={30}
              colors={[colors.secondary, colors.primary]}
              colorsTime={[6, 4]}
              size={110}
              trailStrokeWidth={3}
              trailColor="transparent"
              onComplete={onCompleteTimer}>
              {({remainingTime}) => {
                const minutes = Math.floor((remainingTime % 3600) / 59);
                const seconds = remainingTime % 59;
                return (
                  <View
                    style={{
                      backgroundColor: '#7AD8FC',
                      height: 100,
                      width: 100,
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <CustomText
                      text={`00:${
                        minutes < 10
                          ? '0' + minutes && seconds
                          : minutes && seconds
                      }`}
                      style={styles.time}
                    />
                  </View>
                );
              }}
            </CountdownCircleTimer>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.textNormal}>Code didn't received? </Text>
          <TouchableOpacity
            disabled={resend ? false : true}
            onPress={() => handleReset()}>
            <Text
              style={[
                styles.textNormalWithColor,
                !resend ? styles.disabledResend : {},
              ]}>
              Resend
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomBackground>
  );
};

export default Otp;
