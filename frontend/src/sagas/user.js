import { take, put, call, fork } from "redux-saga/effects";
import ActionTypes from "../redux/constants";
import {
  loginUser,
  saveTokenForLoginUser,
  logoutUser,
  toggleVerificationPopUp,
  loginCurrentUser,
} from "../redux/actions/authAction";
import { loaderStart, loaderStop } from "../redux/actions/appAction";
import API_URL, {
  LOGIN,
  SOCIAL_SIGN_IN,
  callRequest,
  COMPLETE_PROFILE,
  UPDATE_PROFILE,
  LOGOUT,
  CHANGE_PASSWORD,
  DELETE_USER,
  SIGNUP,
  VERIFY_OTP,
  RESEND_PASSWORD,
  FORGOT_PASSWORD,
  RESEND_OTP,
  UPDATE_PASSWORD,
} from "../config/WebService";
import ApiSauce from "../services/ApiSauce";
import NavService from "../helpers/NavService";
import Utils from "../utils/Utils";

function* login() {
  while (true) {
    const { payload, role } = yield take(ActionTypes.LOGIN_USER.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        LOGIN,
        payload,
        "",
        {},
        ApiSauce
      );
      yield put(loaderStop());
      if (response.status === 1) {
        console.log("responseofLogin", response);
        // NavService.navigate('Otp', {
        //   user_id: response?.data?.id,
        //   screenName: 'signup',
        //   role: role,
        // });
        console.log("login response", response);
        yield put(loginUser(response.data));
        yield put(saveTokenForLoginUser(response.data?.user_authentication));
        Utils.DialogAlert(response.message, "success");
        // Utils.DialogAlert(
        //   'OTP verification code has been sent to your email address',
        //   'success',
        // );
      } else {
        Utils.DialogAlert(response.message);
      }
    } catch (error) {
      console.log("loginerrorapiiiiii", error);
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    } finally {
      yield put(loaderStop());
    }
  }
}
function* signUp() {
  while (true) {
    console.log("runnign saga wh");

    const { payload } = yield take(ActionTypes.SIGNUP_USER.REQUEST);
    console.log("🚀 ~ file: user.js:72 ~ function*signUp ~ payload:", payload);
    yield put(loaderStart());
    try {
      console.log("runnign saga");
      const response = yield call(
        callRequest,
        SIGNUP,
        payload,
        "",
        {},
        ApiSauce
      );
      yield put(loaderStop());
      if (response.status === 1) {
        console.log("responseofusersignupapi", response);
        // if (response?.data?.is_profile_complete == 1) {
        yield put(saveTokenForLoginUser(response?.bearer_token));
        yield put(loginUser(response?.data));
      }
      // else if (response?.data?.is_verified == 0) {
      //   NavService.replace("Otp", {
      //     user_id: response.data?.id,
      //   });
      // } else if (
      //   response?.data?.is_verified == 1 &&
      //   response?.data?.is_profile_complete == 0
      // ) {
      //   NavService.navigate("CompleteProfile");
      //   yield put(saveTokenForLoginUser(response?.bearer_token));
      // }
      // } 
      else {
        Utils.DialogAlert(response.message);
      }
    } catch (error) {
      console.log("errorofusersignupapi", error);
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}
function* oTPVerify() {
  while (true) {
    const { payload } = yield take(ActionTypes.VERIFY_OTP.REQUEST);
    console.log("screen");
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        VERIFY_OTP,
        payload,
        "",
        {},
        ApiSauce
      );
      yield put(loaderStop());
      if (response.status === 1) {
        console.log("responseotpVerifyotpVerifyNow", response);
        if (response?.data?.is_profile_complete == 0) {
          NavService.navigate("CompleteProfile", {});
          yield put(saveTokenForLoginUser(response?.bearer_token));
          Utils.DialogAlert(response.message, "success");
        } else {
          yield put(saveTokenForLoginUser(response?.bearer_token));
          yield put(loginUser(response?.data));
          Utils.DialogAlert(response.message, "success");
        }
        // NavService.navigate('CompleteProfile')
      } else {
        Utils.DialogAlert(response.message);
      }
    } catch (error) {
      console.log("errorotpVerifyotpVerifyNow", error);
      yield put(loaderStop());
      Utils.DialogAlert(
        "Invalid OTP"
        // error.message
      );
    }
  }
}
function* resendOTP() {
  while (true) {
    const { payload } = yield take(ActionTypes.RESEND_OTP.REQUEST);
    console.log("payload", payload);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        RESEND_OTP,
        payload,
        "",
        {},
        ApiSauce
      );
      yield put(loaderStop());
      if (response.status === 1) {
        // yield put(loginUser(response.data));
        Utils.DialogAlert(
          "We have resent OTP verification code to your email address",
          "success"
        );
      } else {
        Utils.DialogAlert(response.message);
      }
    } catch (error) {
      console.log("error", error);
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}
function* socialSignin() {
  while (true) {
    const { payload, verified } = yield take(
      ActionTypes.SOCIAL_SIGNUP_USER.REQUEST
    );
    console.log("verifiedverified", verified);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        SOCIAL_SIGN_IN,
        payload,
        "",
        {},
        ApiSauce
      );
      yield put(loaderStop());
      if (response.status === 1) {
        console.log(
          "response.data",
          response?.data?.user_type,
          "response.data"
        );
        if (response?.data?.is_profile_complete == 0) {
          yield put(saveTokenForLoginUser(response?.bearer_token));
          NavService.navigate("CompleteProfile", {
            verified: verified,
          });
        } else {
          yield put(loginUser(response.data));
          yield put(saveTokenForLoginUser(response?.bearer_token));
        }

        Utils.DialogAlert(response.message, "success");
      } else {
        Utils.DialogAlert(response.message);
      }
    } catch (error) {
      console.log("error=======", error);
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}
function* deleteUser() {
  while (true) {
    const { payload } = yield take(ActionTypes.DELETE_USER.REQUEST);

    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        DELETE_USER,
        null,
        "",
        payload,
        {},
        ApiSauce
      );
      yield put(loaderStop());
      if (response.status === 1) {
        console.log("payload", response);
        GoogleSignin.signOut();
        yield put(logoutUser());
        Utils.DialogAlert(response.message, "success");
      } else {
        Utils.DialogAlert(response.message);
      }
    } catch (error) {
      console.log("error", error);
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}
function* completeProfile() {
  while (true) {
    const { payload } = yield take(ActionTypes.COMPLETE_PROFILE.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        COMPLETE_PROFILE,
        payload,
        "",
        {},
        ApiSauce
      );
      yield put(loaderStop());
      if (response.status === 1) {
        console.log("resposnbeeeeeeofcompleteprofile", response);
        yield put(loginUser(response?.data));
        Utils.DialogAlert(response.message, "success");
      } else {
        Utils.DialogAlert(response.message);
      }
    } catch (error) {
      console.log("errorcompleteapiuser", error);
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}
function* updateProfile() {
  while (true) {
    const { payload } = yield take(ActionTypes.UPDATE_PROFILE.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        UPDATE_PROFILE,
        payload,
        "",
        {},
        ApiSauce
      );
      yield put(loaderStop());
      if (response.status === 1) {
        console.log("response.dataresponse.data", response);
        yield put(loginUser(response.data));
        Utils.DialogAlert(response.message, "success");
      } else {
        Utils.DialogAlert(response.message);
      }
    } catch (error) {
      console.log("error--------dataresponse", error);
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}
function* updatePassword() {
  while (true) {
    const { payload } = yield take(ActionTypes.UPDATE_PASSWORD.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        UPDATE_PASSWORD,
        payload,
        "",
        {},
        ApiSauce
      );
      yield put(loaderStop());
      if (response.status === 1) {
        console.log("responseofupdatePassword", response.data);
        yield put(loginUser(response.data));
        NavService.goBack();
        Utils.DialogAlert(response.message, "success");
      } else {
        Utils.DialogAlert(response.message);
      }
    } catch (error) {
      console.log("errorofupdatePassword", error);
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}
function* userLogout() {
  while (true) {
    const { payload } = yield take(ActionTypes.USER_LOGOUT.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(callRequest, LOGOUT, null, "", {}, ApiSauce);
      yield put(loaderStop());
      if (response.status === 1) {
        console.log("response==", response);
        if (
          // payload?.social_device_token !== null &&
          payload?.socialType == "google"
        ) {
          GoogleSignin?.signOut();
        }
        yield put(logoutUser());
        Utils.DialogAlert(response.message, "success");
      } else {
        Utils.DialogAlert(response.message);
      }
    } catch (error) {
      console.log("error", error);
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

export default function* root() {
  yield fork(login);
  // yield fork(socialSignin);
  // yield fork(completeProfile);
  // yield fork(updateProfile);
  // yield fork(userLogout);
  // yield fork(deleteUser);
  yield fork(signUp);
  // yield fork(oTPVerify);
  // yield fork(resendOTP);
  // yield fork(updatePassword);
}
