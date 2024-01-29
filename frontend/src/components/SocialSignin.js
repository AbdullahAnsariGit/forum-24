// npm i @react-native-google-signin/google-signin react-native-fbsdk-next @invertase/react-native-apple-authentication
// npm i @react-native-firebase/app @react-native-firebase/auth

import Toast from 'react-native-toast-message';
// import Auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {AccessToken, LoginManager, Settings} from 'react-native-fbsdk-next';
// import {appleAuth} from '@invertase/react-native-apple-authentication';
import {socialSignin} from '../redux/APIs';

// GoogleSignin.configure({
//   webClientId:
//     '163536674995-l46h1pcokmjeg25tlc7k53hj3d0qbume.apps.googleusercontent.com',
// });

// Settings.setAppID('1101411500700897');

// const Google = async () => {
//   try {
//     const userInfo = await GoogleSignin.signIn();
//     const googleCredential = Auth.GoogleAuthProvider.credential(
//       userInfo.idToken,
//     );
//     const userAuth = await Auth().signInWithCredential(googleCredential);
//     const access_token = await (await userAuth.user.getIdToken()).toString();

//     await socialSignin(access_token, 'google');
//   } catch (error) {
//     Toast.show({
//       text1: 'Unable sign in with Google',
//       type: 'error',
//       visibilityTime: 3000,
//     });
//   }
// };

const Facebook = () => {
  // LoginManager.logInWithPermissions(['public_profile'])
  //   .then(async login => {
  //     if (login.isCancelled) {
  //     } else {
  //       try {
  //         const fbAuth = await AccessToken.getCurrentAccessToken();
  //         const fbCredential = Auth.FacebookAuthProvider.credential(
  //           fbAuth.accessToken,
  //         );
  //         const userAuth = await Auth().signInWithCredential(fbCredential);
  //         await socialSignin(userAuth, 'facebook');
  //       } catch (error) {
  //         console.log(error);
  //         Toast.show({
  //           text1: 'Unable to sign in with Facebook',
  //           type: 'error',
  //           visibilityTime: 3000,
  //         });
  //       }
  //     }
  //   })
  //   .catch(error => console.log(error));
};

// const Apple = async () => {
//   // performs login request
//   try {
//     const appleAuthRequestResponse = await appleAuth.performRequest({
//       requestedOperation: appleAuth.Operation.LOGIN,
//       requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
//     });
//     const {identityToken, nonce} = appleAuthRequestResponse;
//     const appleCredential = Auth?.AppleAuthProvider?.credential(
//       identityToken,
//       nonce,
//     );
//     const credentialState = await Auth()?.signInWithCredential(appleCredential);
//     await socialSignin(credentialState, 'apple');
//   } catch (error) {
//     console.log(error);
//     Toast.show({
//       text1: 'Unable to sign in with Apple',
//       type: 'error',
//       visibilityTime: 3000,
//     });
//   }
// };

export default {Google, Apple, Facebook};
