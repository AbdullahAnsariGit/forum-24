import {
  CommonActions,
  StackActions,
  DrawerActions,
} from '@react-navigation/native';
import {Keyboard} from 'react-native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}
function navigate(name, params = {}) {
  Keyboard.dismiss();
  setTimeout(() => {
    _navigator.dispatch(
      CommonActions.navigate({
        name,
        params,
      }),
    );
  }, 100);
}
function goBack() {
  Keyboard.dismiss();
  setTimeout(() => {
    _navigator.dispatch(CommonActions.goBack());
  }, 100);
}
function replace(routeName, params = {}) {
  _navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    }),
  );
}
function reset(index, routes) {
  Keyboard.dismiss();
  setTimeout(() => {
    _navigator.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    );
  }, 100);
}

function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer());
}

export default {
  navigate,
  goBack,
  replace,
  reset,
  setTopLevelNavigator,
  openDrawer,
};