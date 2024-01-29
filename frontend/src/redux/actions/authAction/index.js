import ActionTypes, {
  USERLOGINDATA,
  USERLOGOUT,
  ONBOARDING,
  USERLOGINTOKEN,
  CURRENTLOGINUSERINFO,
  SIGNUP_USER,
  VERIFY_POPUP,
} from '../../constants';
import store from '../../index';

function dispatch(action) {
  store.dispatch(action);
}
export const onboardingAction = onboarding => {
  console.log('onboardingonboarding',onboarding)
  return {
    type: ONBOARDING,
    payload: onboarding,
  };
};
export function loginCurrentUser(payload, role) {
  return {
    type: ActionTypes.LOGIN_USER.REQUEST,
    payload,
    role,
  };
}
export function loginUser(payload) {
  return {
    type: USERLOGINDATA,
    payload,
  };
}
export function saveTokenForLoginUser(payload) {
  return {
    type: USERLOGINTOKEN,
    payload,
  };
}
export function toggleVerificationPopUp(payload) {
  return {
    type: VERIFY_POPUP,
    payload,
  };
}
export function signUpUser(payload) {
  return {
    type: ActionTypes.SIGNUP_USER.REQUEST,
    payload,
  };
}
export function updatePassword(payload) {
  return {
    type: ActionTypes.UPDATE_PASSWORD.REQUEST,
    payload,
  };
}
// export function resendOTP(payload) {
//   return {
//     type: ActionTypes.RESEND_OTP.REQUEST,
//     payload,
//   };
// }
// export function otpVerify(payload, verified) {
//   return {
//     type: ActionTypes.VERIFY_OTP.REQUEST,
//     payload,
//     verified,
//   };
// }
export function saveUserForLoginUser(payload) {
  return {
    type: CURRENTLOGINUSERINFO,
    payload,
  };
}

export function socialSignin(payload, verified) {
  return {
    type: ActionTypes.SOCIAL_SIGNUP_USER.REQUEST,
    payload,
    verified,
  };
}
export function completeProfile(payload) {
  return {
    type: ActionTypes.COMPLETE_PROFILE.REQUEST,
    payload,
  };
}
export function updateProfile(payload) {
  return {
    type: ActionTypes.UPDATE_PROFILE.REQUEST,
    payload,
  };
}
export function logoutUser() {
  return {
    type: USERLOGOUT,
  };
}
export function logoutUserWithDispatch() {
  dispatch({type: USERLOGOUT});
}

export function logoutCurrentUser() {
  return {
    type: ActionTypes.USER_LOGOUT.REQUEST,
  };
}

export function changePassword(payload) {
  return {
    type: ActionTypes.CHANGE_PASSWORD.REQUEST,
    payload,
  };
}
export function otpVerify(payload, verified) {
  return {
    type: ActionTypes.VERIFY_OTP.REQUEST,
    payload,
  };
}
export function resendOTP(payload) {
  return {
    type: ActionTypes.RESEND_OTP.REQUEST,
    payload,
  };
}
export function deleteUser(payload) {
  return {
    type: ActionTypes.DELETE_USER.REQUEST,
    payload,
  };
}
