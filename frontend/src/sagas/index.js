import {fork} from 'redux-saga/effects';

// import appInfo from './appInfo'
import user from './user';

export default function* root() {
  // yield fork(appInfo);
  yield fork(user);
}
