import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import CustomBackground from "../../../components/CustomBackground";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import * as EmailValidator from "email-validator";
import Toast from "react-native-toast-message";
import NavService from "../../../helpers/NavService";
import { schema } from "../../../utils/validation";
import { colors } from "../../../utils";
import styles from "./styles";
import { appIcons, appLogos } from "../../../assets/index";
import { loginUser, signUpUser } from "../../../redux/actions/authAction";
import { connect } from "react-redux";
import axios from "axios";
class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  onSubmit = () => {
    const { role } = this?.props?.route?.params;

    const { name, email, password, confirmPassword } = this.state;
    if (email && !password && !confirmPassword) {
      Toast.show({
        text1: "Please enter all fields",
        type: "error",
        visibilityTime: 3000,
      });
    } else if (!email) {
      Toast.show({
        text1: "Please enter email address",
        type: "error",
        visibilityTime: 3000,
      });
    } else if (!EmailValidator.validate(email)) {
      Toast.show({
        text1: "Please enter a valid email address",
        type: "error",
        visibilityTime: 3000,
      });
    } else if (!password) {
      Toast.show({
        text1: "Password is required",
        type: "error",
        visibilityTime: 3000,
      });
    } else if (!schema.validate(password)) {
      Toast.show({
        text1:
          "Password not valid (Use atleast one UpperCase Letter, one number and one special character",
        type: "error",
        visibilityTime: 3000,
      });
    } else if (!confirmPassword) {
      Toast.show({
        text1: "Confirm password is required",
        type: "error",
        visibilityTime: 3000,
      });
    } else if (password !== confirmPassword) {
      Toast.show({
        text1: "Password and confirm password must be same",
        type: "error",
        visibilityTime: 3000,
      });
    } else {
      Toast.show({
        text1: "OTP verification code has been sent to your email address",
        type: "success",
        visibilityTime: 3000,
      });
      // NavService.replace("Login", { role: role });
      // const apiUrl = 'http://localhost:3000/api/register';
      let updateRole = role.toLowerCase();
      const payload = {
        email: email,
        password: password,
        confirm_password: password,
        role: updateRole,
        name: name,
      };
      this.props.signUpUser(payload);

      // fetch(apiUrl, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     // You can add other headers as needed
      //   },
      //   body: JSON.stringify(payload)
      // })
      //   .then(response => {
      //     if (!response.ok) {
      //       throw new Error(`POST Error: ${response.statusText}`);
      //     }
      //     return response.json();
      //   })
      //   .then(data => {
      //     console.log('POST Response:', data);
      //   })
      //   .catch(error => {
      //     console.error(error.message);
      //   });
    }
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <CustomBackground
        showLogo={false}
        titleText={"SIGNUP"}
        onBack={() => this.props.navigation.goBack()}
      >
        <View style={styles.container}>
          <View style={[styles.container, { marginTop: 20 }]}>
            <View style={styles.logoStyle}>
              <Image style={styles.applogo} source={appLogos.appLogo} />
            </View>
            <CustomTextInput
              label
              maxLength={35}
              labeltext={"Name"}
              leftIcon={appIcons.user}
              Lineicon={appIcons.line}
              Lineiconcolor={colors.gray}
              Iconcolor={colors.secondary}
              placeholder={"Name"}
              value={name}
              keyboardType={"email-address"}
              onChangeText={(value) => this.setState({ name: value })}
              containerStyle={styles.emailinput}
            />
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
              value={password}
              onChangeText={(value) => this.setState({ password: value })}
              containerStyle={styles.emailinput}
            />
            <CustomTextInput
              label
              maxLength={35}
              isPassword
              labeltext={"Confirm Password"}
              leftIcon={appIcons.lock}
              Lineicon={appIcons.line}
              Lineiconcolor={colors.gray}
              Iconcolor={colors.secondary}
              placeholder={"Confirm Password"}
              rightIcon
              value={confirmPassword}
              onChangeText={(value) =>
                this.setState({ confirmPassword: value })
              }
              containerStyle={styles.emailinput}
            />

            <CustomButton
              title="SIGNUP"
              onPress={this.onSubmit}
              buttonStyle={styles.btn}
              textStyle={styles.btntext}
            />
          </View>

          <View style={styles.bottomView}>
            <Text style={styles.textNormal}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              <Text style={styles.textNormalWithColor}>Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

const actions = { loginUser, signUpUser };

export default connect(null, actions)(Signup);
