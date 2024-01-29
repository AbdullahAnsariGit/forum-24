import React, {Component} from 'react';
import {View, Image} from 'react-native';
import * as EmailValidator from 'email-validator';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {appIcons, appLogos} from '../../../assets/index';
import styles from './styles';
class ForgotPassword extends Component {
  state = {
    email: '',
  };

  onSubmit = () => {
    const {email} = this.state;
    if (!email) {
      Toast.show({
        text1: 'Please enter email address',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!EmailValidator.validate(email)) {
      Toast.show({
        text1: 'Please enter a valid email address',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Toast.show({
        text1: 'OTP verification code has been sent to your email address',
        type: 'success',
        visibilityTime: 3000,
      });
      NavService.replace('Otp', {screenName: 'forgot'});
    }
  };

  render() {
    const {email} = this.state;
    return (
      <CustomBackground
        showLogo={false}
        titleText={'FORGOT PASSWORD'}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <View style={[styles.container, {marginTop: 20}]}>
            <View style={styles.logoStyle}>
              <Image style={styles.applogo} source={appLogos.appLogo} />
            </View>
            <View style={styles.textNormal}>
              <CustomTextInput
                leftIcon={appIcons.email}
                placeholder={'Email'}
                value={email}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({email: value})}
                containerStyle={{marginBottom: 10}}
              />
              <CustomButton
                title="SUBMIT"
                onPress={this.onSubmit}
                buttonStyle={{borderRadius: 10}}
                textStyle={{fontSize: 22}}
              />
            </View>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default ForgotPassword;
