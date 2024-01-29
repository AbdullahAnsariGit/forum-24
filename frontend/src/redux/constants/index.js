
export const ONBOARDING = 'ONBOARDING';
export const USERLOGINTOKEN = 'USERLOGINTOKEN';
export const USERLOGINDATA = 'USERLOGINDATA';
export const USERLOGOUT = 'USERLOGOUT';
export const CURRENTLOGINUSERINFO = 'CURRENTLOGINUSERINFO';
export const ISUSERLOGIN = 'ISUSERLOGIN';
export const LOADER = 'LOADER';
export const CURRENTUSERPROFILE = 'CURRENTUSERPROFILE';
export const ERRMSG = 'ERRMSG';
export const SEARCHEDREST = 'SEARCHEDREST';
export const VERIFY_POPUP = 'VERIFY_POPUP';
export const TOGGLEAPPTHEME = 'TOGGLE_APP_THEME';
export const DRAWERPOSITION = "DRAWERPOSITION";
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const CANCEL = 'CANCEL';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  const res = {
    REQUEST: undefined,
    SUCCESS: undefined,
    CANCEL: undefined,
    FAILURE: undefined,
  };
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const NETWORK_INFO = 'NETWORK_INFO';
export const SHOW_LOADING = 'SHOW_LOADING';
export const LOADING_STATE = 'APP_INFO_SHOW_LOADING';
export const PRIVACY_POLICY = 'PRIVACY_POLICY';
export const CLEAR_USER_TEMP_DATA = 'CLEAR_USER_TEMP_DATA';
export const APP_USAGE_POLICIES = createRequestTypes('APP_USAGE_POLICIES');
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
// USER ACTIONS
export const SOCIAL_SIGNUP_USER = createRequestTypes('SOCIAL_SIGNUP_USER');
export const LOGIN_USER = createRequestTypes('LOGIN_USER');
export const UPDATE_PROFILE = createRequestTypes('UPDATE_PROFILE');
export const COMPLETE_PROFILE = createRequestTypes('COMPLETE_PROFILE');
export const USER_LOGOUT = createRequestTypes('USER_LOGOUT');
export const CHANGE_PASSWORD = createRequestTypes('CHANGE_PASSWORD');
export const SIGNUP_USER = createRequestTypes('SIGNUP_USER');
export const DELETE_USER = createRequestTypes('DELETE_USER');
export const VERIFY_OTP = createRequestTypes('VERIFY_OTP');
export const RESEND_OTP = createRequestTypes('RESEND_OTP');
export const FORGOT_PASSWORD = createRequestTypes('FORGOT_PASSWORD');
export const RESEND_PASSWORD = createRequestTypes('RESEND_PASSWORD');
// App Action
export const GET_EVENT_TYPE = createRequestTypes('GET_EVENT_TYPE');
export const CREATE_EVENT = createRequestTypes('CREATE_EVENT');
export const GET_EVENT = createRequestTypes('GET_EVENT');
export const GET_EVENT_DETAIL = createRequestTypes('GET_EVENT_DETAIL');
export const DELETE_EVENT = createRequestTypes('DELETE_EVENT');
export const EDIT_EVENT = createRequestTypes('EDIT_EVENT');
export const LIKE_EVENT = createRequestTypes('LIKE_EVENT');
export const SEND_COMMENT = createRequestTypes('SEND_COMMENT');
export const JOIN_EVENT = createRequestTypes('JOIN_EVENT');
export const INTEREST = createRequestTypes('INTEREST');
export const LEAVE_EVENT = createRequestTypes('LEAVE_EVENT');
export const UPDATE_PASSWORD = createRequestTypes('UPDATE_PASSWORD');
export default {
  LOADING_STATE,
  SOCIAL_SIGNUP_USER,
  LOGIN_USER,
  COMPLETE_PROFILE,
  UPDATE_PROFILE,
  USER_LOGOUT,
  CHANGE_PASSWORD,
  DELETE_USER,
  SIGNUP_USER,
  VERIFY_OTP,
  RESEND_OTP,
  FORGOT_PASSWORD,
  RESEND_PASSWORD,
  GET_EVENT_TYPE,
  CREATE_EVENT,
  GET_EVENT,
  GET_EVENT_DETAIL,
  DELETE_EVENT,
  EDIT_EVENT,
  LIKE_EVENT,
  SEND_COMMENT,
  JOIN_EVENT,
  INTEREST,LEAVE_EVENT,
  UPDATE_PASSWORD
};
