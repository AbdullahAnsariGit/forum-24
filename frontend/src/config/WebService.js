import _ from 'lodash';
import ApiSauce from '../services/ApiSauce';
import store from '../redux';

// export const BASE_URL = 'https://server.appsstaging.com:3017/api/v1/';
export const BASE_URL = 'http://localhost:3017/api/';
// export const BASE_URL = 'https://server1.appsstaging.com/3230/leaders-dash/public/api/';

// export const ASSETS_URL = 'https://server1.appsstaging.com/3230/leaders-dash/public/';
// export const WEB_SOCKET_URL = 'wss://server.appsstaging.com:3017/';
export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=';
// export const BASE_URL = "http://10.0.4.71:3018/api/v1/"; //local
// export const ASSETS_URL = "http://10.0.4.71:3018/"; //local
export const API_TIMEOUT = 20000;
export const NEW_API_KEY = '1d399038bef14b0497d028fc27999696';
export const GEOCODE_API_KEY = 'AIzaSyBmaS0B0qwokES4a_CiFNVkVJGkimXkNsk';
const GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';

export const API_LOG = true;

export const ERROR_SOMETHING_WENT_WRONG = {
  message: 'Something went wrong, Please try again later',
  error: 'Something went wrong, Please try again later',
};
export const ERROR_NETWORK_NOT_AVAILABLE = {
  message: 'Please connect to the working Internet',
  error: 'Please connect to the working Internet',
};
export const ERROR_TOKEN_EXPIRE = {
  message: 'Session Expired, Please login again!',
  error: 'Session Expired, Please login again!',
};
export const ERROR_CANCEL_ERROR = {
  message: 'Upload cancelled',
  error: 'Upload cancelled',
};

export const REQUEST_TYPE = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
};

// API USER ROUTES

export const SIGNUP = {
  route: 'register',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const LOGIN = {
  route: 'login',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const VERIFY_OTP = {
  route: 'auth/verification',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};

export const RESEND_OTP = {
  route: 'auth/re-send-code',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};

export const SOCIAL_SIGN_IN = {
  route: 'auth/social-login',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const LOGOUT = {
  route: 'auth/logout',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const COMPLETE_PROFILE = {
  route: 'auth/complete-profile',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const UPDATE_PROFILE = {
  route: 'auth/complete-profile',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const DELETE_USER = {
  route: 'deleteCustomer',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const UPDATE_PASSWORD = {
  route: 'auth/update-password',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};


export const callRequest = function (
  url,
  data,
  parameter,
  urlParameter,
  header = {},
  // ApiSauce,
  baseUrl = BASE_URL,
) {
  // note, import of "ApiSause" has some errors, thats why I am passing it through parameters

  let _header = header;
  if (url.access_token_required) {
    const _access_token =
      store?.getState()?.authReducer?.userToken !== null
        ? store?.getState()?.authReducer?.userToken
        : '';
    console.log('_access_token', _access_token);
    // const _access_token = '';
    if (_access_token) {
      _header = {
        ..._header,
        ...{
          Authorization: _access_token.includes('Bearer ')
            ? _access_token
            : 'Bearer ' + _access_token,
        },
      };
    }
  }

  const _url =
    parameter &&
      !_.isEmpty(parameter) &&
      urlParameter &&
      !_.isEmpty(urlParameter)
      ? `${url.route}/${urlParameter}?${parameter?.key}=${parameter?.value}`
      : parameter && !_.isEmpty(parameter)
        ? `${url.route}?${parameter?.firstKey}=${parameter?.firstValue}&${parameter?.secondKey}=${parameter?.secondValue}`
        : urlParameter && !_.isEmpty(urlParameter)
          ? `${url.route}/${urlParameter}`
          : url.route;
  console.log('_url', url);
  console.log('_url', _url);
  if (url.type === REQUEST_TYPE.POST) {
    return ApiSauce.post(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.GET) {
    return ApiSauce.get(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.PUT) {
    return ApiSauce.put(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.DELETE) {
    return ApiSauce.delete(_url, data, _header, baseUrl);
  }
  // return ApiSauce.post(url.route, data, _header);
};

export default {
  SOCIAL_SIGN_IN,
  COMPLETE_PROFILE,
  UPDATE_PROFILE,
  LOGOUT,
  SIGNUP,
  RESEND_OTP,
  VERIFY_OTP
};
