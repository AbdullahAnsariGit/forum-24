import {take, put, call, fork} from 'redux-saga/effects';
import ActionTypes from '../redux/constants';
import API_URL, {
  callRequest,
  JOIN_EVENT,
  GET_EVENT_TYPE,
  CREATE_EVENT,
  GET_EVENT,
  GET_EVENT_DETAIL,
  DELETE_EVENT,
  EDIT_EVENT,
  LIKE_EVENT,
  SEND_COMMENT,
  INTEREST,LEAVE_EVENT
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import {loaderStart, loaderStop} from '../redux/actions/appAction';
import Util from '../utils/Utils';
import NavService from '../helpers/NavService';
function* getEventType() {
  while (true) {
    const {responseCallback} = yield take(ActionTypes.GET_EVENT_TYPE.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        GET_EVENT_TYPE,
        null,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      if (response?.status === 1) {
        console.log('responseresponse===response', response);
        if (responseCallback) {
          responseCallback(response?.data);
        }
      } else {
        responseCallback([]);
        // Util.DialogAlert(response.message, 'error');
      }
    } catch (error) {
      // console.log('====error====error', error);
      yield put(loaderStop());
      // Util.DialogAlert(error.message);
    }
  }
}


export default function* root() {
  yield fork(getEventType);
}
