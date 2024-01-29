import React, { Component } from "react";
import { View, Image, Keyboard, Platform, Alert } from "react-native";
import { connect } from "react-redux";
import * as EmailValidator from "email-validator";
import CustomBackground from "../../../components/CustomBackground";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import Toast from "react-native-toast-message";
import { colors, family, size } from "../../../utils";
import { appIcons, appLogos } from "../../../assets/index";
import { loginCurrentUser, loginUser } from "../../../redux/actions/authAction";
import { onboardingAction } from "../../../redux/actions/authAction";
import { signUpUser } from "../../../redux/actions/authAction";
import { getDeviceToken } from "../../../redux/actions/appAction";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import CustomText from "../../../components/CustomText";
import NavService from "../../../helpers/NavService";
class Login extends Component {
  state = {
    email: "",
    setKeyboardStatus: false,
    ConfirmPassword: "",
  };

  onSubmit = async () => {
    // this.props.onboardingAction(true);
    const { email, ConfirmPassword } = this.state;
    if (!email) {
      Toast.show({
        text1: "Email address field can`t be empty.",
        type: "error",
        visibilityTime: 3000,
      });
    } else if (!EmailValidator.validate(email)) {
      Toast.show({
        text1: "Please enter a valid email address.",
        type: "error",
        visibilityTime: 3000,
      });
    } else if (!ConfirmPassword) {
      Toast.show({
        text1: "Password field can`t be empty.",
        type: "error",
        visibilityTime: 3000,
      });
    } else {
      const fcmtoken = await getDeviceToken();
      let payload = {
        email: email?.toLowerCase(),
        password: ConfirmPassword,
        user_device_type: Platform.OS,
        user_device_token: fcmtoken ? fcmtoken : "fcmtoken",
        // user_type: "user",
        role: this.props.route.params.role,
      };
      this.props.loginCurrentUser(payload);
      // this?.props?.loginUser(payload);
      Keyboard.dismiss();
    }
  };

  componentDidMount() {
    // const {setKeyboardStatus} = this.state;
    // const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
    //   this.setState({setKeyboardStatus: true});
    // });
    // const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
    //   this.setState({email: ''});
    //   this.setState({setKeyboardStatus: false});
    // });
    // BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   this.handleBackButtonClick,
    // );

    return () => {
      // showSubscription.remove();
      // hideSubscription.remove();
    };
  }

  // handleBackButtonClick() {
  //   NavService.navigate('AppStarter');
  //   return true;
  // }
  // componentWillUnmount() {
  //   // BackHandler.removeEventListener(
  //   //   'hardwareBackPress',
  //   //   this.handleBackButtonClick(),
  //   // );
  // }

  render() {
    const { isOnboard } = this.props;
    const { role } = this?.props?.route?.params;
    const { email, ConfirmPassword, setKeyboardStatus } = this.state;
    return (
      <CustomBackground
        showLogo={false}
        backgroundImage
        titleText={"Login"}
        back={false}
      // Back={true}
      // onBack={() => NavService.replace('Login')}
      >
        <View
          style={
            setKeyboardStatus == true
              ? { bottom: "2%", alignItems: "center", alignSelf: "center" }
              : { alignItems: "center", alignSelf: "center", marginTop: 50 }
          }
        >
          <View style={styles.container}>
            <View style={[styles.container, { marginTop: 10 }]}>
              <View style={styles.logoStyle}>
                <Image style={styles.applogo} source={appIcons.message} />
              </View>
              <CustomTextInput
                label
                maxLength={35}
                labeltext={"Email"}
                leftIcon={appIcons.email}
                Lineicon={appIcons.line}
                Lineiconcolor={colors.gray}
                Iconcolor={colors.secondary}
                placeholder={"Email"}
                value={email}
                keyboardType={"email-address"}
                onChangeText={(value) => this.setState({ email: value })}
                containerStyle={styles.emailinput}
              />
              <CustomTextInput
                label
                maxLength={35}
                isPassword
                labeltext={"Password"}
                leftIcon={appIcons.lock}
                Lineicon={appIcons.line}
                Lineiconcolor={colors.gray}
                Iconcolor={colors.secondary}
                placeholder={"Password"}
                rightIcon
                value={ConfirmPassword}
                onChangeText={(value) =>
                  this.setState({ ConfirmPassword: value })
                }
                containerStyle={styles.emailinput}
              />

              <CustomButton
                title="Login"
                onPress={this.onSubmit}
                buttonStyle={styles.btn}
                textStyle={styles.btntext}
              />
            </View>
          </View>
          <View style={styles.main}>
            <CustomText
              font={family?.Poppins_Medium}
              size={size?.xsmall}
              color={colors?.black}
              style={{ marginHorizontal: 4 }}
              text={"Don't have account ?"}
            />
            <TouchableOpacity
              onPress={() => NavService.navigate("Signup", { role: role })}
            >
              <CustomText
                font={family?.Poppins_Bold}
                size={size?.xsmall}
                color={colors?.secondary}
                text="Sign up"
              />
            </TouchableOpacity>
          </View>
        </View>
      </CustomBackground>
    );
  }
}
const actions = { loginUser, onboardingAction, loginCurrentUser };
function mapStateToProps({ authReducer }) {
  return {
    isOnboard: authReducer?.onboardingAction,
  };
}
export default connect(mapStateToProps, actions)(Login);
