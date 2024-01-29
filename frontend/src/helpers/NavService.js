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
  _navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
}
function goBack() {
  Keyboard.dismiss();
  setTimeout(() => {
    _navigator.dispatch(CommonActions.goBack());
  }, 100);
}
function replace(routeName, params = {}) {
  _navigator.dispatch(StackActions.replace(routeName, params));
}
function reset(index, routes) {
  _navigator.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  );
}
function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer());
}
function closeDrawer() {
  _navigator.dispatch(DrawerActions.closeDrawer());
}
export default {
  navigate,
  goBack,
  replace,
  reset,
  setTopLevelNavigator,
  openDrawer,
  closeDrawer,
};
