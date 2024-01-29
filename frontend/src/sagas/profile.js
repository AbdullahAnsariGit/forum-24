import { take, put, call, fork } from "redux-saga/effects";
import ActionTypes from "../redux/ActionTypes";
import API_URL, {
  callRequest
} from "../config/WebService";
import ApiSauce from "../services/ApiSauce";
import { RESPONSE_TYPE } from "../constants";
import ProfileActions from "../redux/actions/profile.actions";

function* getUserProfile() {
    while (true) {
		yield take(ActionTypes.GET_USER_PROFILE.REQUEST);
		try {
			const response = yield call( callRequest, API_URL.USER_PROFILE_URL, null, "", {}, ApiSauce );
			if (response.status === RESPONSE_TYPE.success) yield put(ProfileActions.getUserProfileSuccess(response.data?.customer[0]))
		} catch (err) { console.log('error', err) }
    }
}

function* getDriverProfile() {
    while (true) {
		yield take(ActionTypes.GET_DRIVER_PROFILE.REQUEST);
		try {
			const response = yield call( callRequest, API_URL.DRIVER_PROFILE_URL, null, "", {}, ApiSauce );
			if (response.status === RESPONSE_TYPE.success) 
			yield put(ProfileActions.getDriverProfileSuccess(response.data?.rider))
		} catch (err) { console.log('error', err) }
    }
}

export default function* root() {
    yield fork(getUserProfile);
    yield fork(getDriverProfile);
}
