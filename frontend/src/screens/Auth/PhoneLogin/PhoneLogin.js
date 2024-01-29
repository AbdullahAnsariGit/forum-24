import React, {Component, createRef} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard, BackHandler, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import * as EmailValidator from 'email-validator';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {schema} from '../../../utils/validation';
// import {colors} from '../../../utils';
import {appIcons, appImages, appLogos} from '../../../assets/index';
import {loginUser} from '../../../redux/actions/authAction';
import styles from './styles';
import CustomText from '../../../components/CustomText';
import {log} from 'react-native-reanimated';
import {colors, size, WP} from '../../../utils';
import {navigateToOTP} from '../../../helpers/NavService';
import PhoneInput from 'react-native-phone-number-input';
// import SocialSignin from '../../../components/SocialSignin';
import Logo from '../../../components/Logo';
const {height} = Dimensions.get('window')

class PhoneLogin extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumbers: '',
      formattedValue: '',
    };
  }
  clearPhoneInputField = () => {
    this.setState({
      phoneNumbers: '',
      formattedValue: '',
    });
  };

  // onSubmit = async () => {
  //   const {phoneNumber, formattedValue} = this.state;
  //   const {role} = this.props?.route?.params;
  //   console.log(role, 'phonerole');

  //   if (!phoneNumber) {
  //     Toast.show({
  //       text1: 'Phone number field can`t be empty.',
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (formattedValue?.length < 11 || formattedValue?.length > 16) {
  //     Toast.show({
  //       text1: 'Invalid phone number.',
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else if (formattedValue.includes('.') || formattedValue.includes(',')) {
  //     Toast.show({
  //       text1: 'Invalid phone number.',
  //       type: 'error',
  //       visibilityTime: 3000,
  //     });
  //   } else {
  //     Keyboard.dismiss();
  //     NavService.navigate('Otp', {role: role, phoneNumbers: phoneNumber});
  //     Toast.show({
  //       text1: 'OTP verification code has been sent to your Phone Number.',
  //       type: 'success',
  //       visibilityTime: 3000,
  //     });
  //   }
  // };

  onSubmit = () => {
    const {phoneNumbers, formattedValue} = this.state;

    if (!phoneNumbers) {
      Toast.show({
        text1: 'Phone number field can`t be empty.',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (formattedValue?.length < 11 || formattedValue?.length > 16) {
      Toast.show({
        text1: 'Invalid phone number.',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (
      formattedValue.includes('.') ||
      formattedValue.includes(',') ||
      formattedValue.includes(' ')
    ) {
      Toast.show({
        text1: 'Invalid phone number.',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      // let payload = {
      //   role: 'user',
      //   email: 'johnsmith@example.com',
      //   name: 'John Smith',
      //   password: '123456',
      // };
      NavService.replace('Otp', {phoneNumbers: phoneNumbers});
      Keyboard.dismiss();
      // this.props.loginUser(payload);
      Toast.show({
        text1: 'OTP verification code has been sent to your Phone Number.',
        type: 'success',
        visibilityTime: 3000,
      });
    }
  };

  // componentDidMount() {
  //   // BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  // }
  // handleBackButtonClick() {
  //   NavService.navigate('AppStarter');
  //   return true;
  // }
  // componentWillUnmount() {
  //   // BackHandler.removeEventListener(
  //   //   'hardwareBackPress',
  //   //   this.handleBackButtonClick,
  //   // );
  // }


 

  render() {
    const {phoneNumbers, formattedValue} = this.state;
    return (
      <CustomBackground
        isHeader
        backgroundImage
        background={appImages.backgroundImage}
        showLogo={false}
        titleText={'Phone Login'}
        // onBack={() => NavService.replace('AppStarter')}
        >
        <View style={styles.container}>
          <View style={styles.logo}>
            <Logo size={250} />
          </View>

          <View style={styles.main}>
            <PhoneInput
              ref={this.phoneInput}
              codeTextStyle={{color: colors.gray}}
              textInputProps={{
                maxLength: 13,
                // backgroundColor:'red',
                top:4,
                color: 'black',
                placeholderTextColor: colors.gray,
              }}
              defaultValue={phoneNumbers}
              defaultCode="US"
              autoFocus={false}
              disableArrowIcon={false}
              layout="first"
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textContainerPhone}
              textInputStyle={{padding: 0, fontSize: size.small, height:50, marginTop:-height*0.005}}
              textStyle={{fontSize: 10}}
              countryPickerButtonStyle={styles.countryPickerButtonStyle}
              onChangeText={text => {
                this.setState({phoneNumbers: text});
              }}
              onChangeFormattedText={text => {
                this.setState({formattedValue: text});
              }}
              withDarkTheme
            />
            <CustomButton
              onPress={this.onSubmit}
              title="Next"
              buttonStyle={[styles.pressAble]}
              textStyle={{fontSize: size.small, color: colors.white}}
            />
          </View>
        </View>
      </CustomBackground>
    );
  }
}
const actions = {loginUser};
export default connect(null, actions)(PhoneLogin);
