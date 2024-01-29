// import React, {Component} from 'react';
// import {
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   Keyboard,
//   Alert,
//   BackHandler,
// } from 'react-native';
// import {connect} from 'react-redux';
// import * as EmailValidator from 'email-validator';
// import CustomBackground from '../../../components/CustomBackground';
// import CustomButton from '../../../components/CustomButton';
// import CustomTextInput from '../../../components/CustomTextInput';
// import Toast from 'react-native-toast-message';
// import NavService from '../../../helpers/NavService';
// import {schema} from '../../../utils/validation';
// import {colors} from '../../../utils';
// import {appIcons, appLogos} from '../../../assets/index';
// import {loginUser} from '../../../redux/actions/authAction';
// import styles from './styles';

// class Login extends Component {
//   state = {
//     email: '',
//     setKeyboardStatus: false,
//   };

//   onSubmit = () => {
//     const {email} = this.state;
//     Keyboard.dismiss();

//     if (!email) {
//       Toast.show({
//         text1: 'Email address field can`t be empty.',
//         type: 'error',
//         visibilityTime: 3000,
//       });
//     } else if (!EmailValidator.validate(email)) {
//       Toast.show({
//         text1: 'Please enter a valid email address.',
//         type: 'error',
//         visibilityTime: 3000,
//       });
//     } else {
//       let payload = {
//         role: 'user',
//         email: 'johnsmith@example.com',
//         name: 'John Smith',
//         password: '123456',
//       };
//       NavService.replace('Otp', {mail: email});
//       Keyboard.dismiss();
//       Toast.show({
//         text1: 'OTP verification code has been sent to your Email Address.',
//         type: 'success',
//         visibilityTime: 3000,
//       });
//     }
//   };

//   componentDidMount() {
//     const {setKeyboardStatus} = this.state;
//     const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
//       this.setState({setKeyboardStatus: true});
//     });
//     const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
//       this.setState({email: ''});
//       this.setState({setKeyboardStatus: false});
//     });
//     // BackHandler.addEventListener(
//     //   'hardwareBackPress',
//     //   this.handleBackButtonClick,
//     // );

//     return () => {
//       showSubscription.remove();
//       hideSubscription.remove();
//     };
//   }

//   handleBackButtonClick() {
//     NavService.navigate('AppStarter');
//     return true;
//   }
//   componentWillUnmount() {
//     // BackHandler.removeEventListener(
//     //   'hardwareBackPress',
//     //   this.handleBackButtonClick(),
//     // );
//   }

//   render() {
//     const {email, password, setKeyboardStatus} = this.state;
//     return (
//       <CustomBackground
//         showLogo={false}
//         backgroundImage
//         titleText={'Login'}
//         Back={true}
//         onBack={() => NavService.replace('AppStarter')}>
//         <View
//           // style={
//           //   setKeyboardStatus == true
//           //     ? {bottom: '2%', alignItems: 'center', alignSelf: 'center'}
//           //     : {alignItems: 'center', alignSelf: 'center', marginTop: 50}
//           // }
//           >
//           <View style={styles.container}>
//             <View style={[styles.container]}>
//               <View style={styles.logoStyle}>
//                 <Image style={styles.applogo} source={appLogos.appLogo} />
//               </View>
//               <CustomTextInput
//                 label
//                 maxLength={35}
//                 labeltext={'Email'}
//                 leftIcon={appIcons.email}
//                 Lineicon={appIcons.line}
//                 Lineiconcolor={colors.gray}
//                 Iconcolor={colors.secondary}
//                 placeholder={'Email'}
//                 value={email}
//                 keyboardType={'email-address'}
//                 onChangeText={value => this.setState({email: value})}
//                 containerStyle={styles.emailinput}
//               />

//               <CustomButton
//                 title="Next"
//                 onPress={this.onSubmit}
//                 buttonStyle={styles.btn}
//                 textStyle={styles.btntext}
//               />
//             </View>
//           </View>
//         </View>
//       </CustomBackground>
//     );
//   }
// }
// const actions = {loginUser};
// export default connect(null, actions)(Login);
import {StyleSheet} from 'react-native';
import React from 'react';
import LoginForm from './Form';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../redux/actions/authAction';
import CustomBackground from '../../../components/CustomBackground';
import NavService from '../../../helpers/NavService';
const Login = () => {
  const disPatch = useDispatch();
  const handleLogin = values => {
    disPatch(loginUser(values));
  };
  return (
    <CustomBackground
      showLogo={false}
      backgroundImage
      titleText={'Login'}
      Back={true}
      onBack={() => NavService.replace('AppStarter')}>
      <LoginForm submit={handleLogin} />
    </CustomBackground>
  );
};

export default Login;

const styles = StyleSheet.create({});
