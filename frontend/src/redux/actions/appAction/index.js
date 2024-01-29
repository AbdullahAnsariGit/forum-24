import {ONBOARDING} from '../../constants';
import {CURRENTLOCATION, DRAWERPOSITION,AUTOMODALSHOW} from '../../constants';
// import messaging from '@react-native-firebase/messaging';
export const onboardingAction = onboarding => {
  return {
    type: ONBOARDING,
    payload: onboarding,
  };
};
import store from '../../index';


function dispatch(action) {
  store.dispatch(action);
}
export function loaderStart() {
  return {
    type: 'LOADER_START',
  };
}
export function loaderStartWithDispatch() {
  dispatch({type: 'LOADER_START'});
}
export function loaderStopWithDispatch() {
  dispatch({type: 'LOADER_STOP'});
}
export function loaderStop() {
  return {
    type: 'LOADER_STOP',
  };
}
export const getDeviceToken = async () => {
  try {
    // await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    if (token) return token;
    else return '';
  } catch (error) {
    console.log(error);
  }
};

export const saveCurrentUserLocation = location => {
  return {
    type: CURRENTLOCATION,
    payload: location,
  };
};

export const drawerPosition = position => {
  return {
    type: DRAWERPOSITION,
    payload: position,
  };
};

export const autoModalShow = val => {
  return {
    type: AUTOMODALSHOW,
    payload: val,
  };
};
