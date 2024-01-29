import _ from 'lodash';
import {create} from 'apisauce';
import axios from 'axios';
import {eventChannel, END} from 'redux-saga';
import {
  API_LOG,
  BASE_URL,
  API_TIMEOUT,
  ERROR_SOMETHING_WENT_WRONG,
  ERROR_NETWORK_NOT_AVAILABLE,
} from '../config/WebService';
import {logoutUserWithDispatch} from '../redux/actions/authAction';

const api = create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
});

class ApiSauce {
  async post(url, data, headers, baseUrl) {
    console.log('baseUrl', baseUrl);
    api.setBaseURL(BASE_URL);
    const response = await api.post(url, data, {
      headers,
    });

    if (__DEV__ && API_LOG) {
      console.log('url', url);
      console.log('data', data);
      console.log('headers', headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  async get(url, data, headers, baseUrl) {
    api.setBaseURL(BASE_URL);
    const response = await api.get(url, data, {
      headers,
    });

    if (__DEV__ && API_LOG) {
      console.log('url-------', url);
      console.log('headers', headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  async delete(url, data, headers, baseUrl) {
    api.setBaseURL(BASE_URL);
    const response = await api.delete(
      url,
      {},
      {
        headers,
      },
    );

    if (__DEV__ && API_LOG) {
      console.log('deletedeleteUrl', url);
      console.log('headers', headers);
      console.log('ffffresponseresponse',response);
    }

    return this.manipulateResponse(response);
  }

  async put(url, data, headers, baseUrl) {
    api.setBaseURL(BASE_URL);
    const response = await api.put(url, data, {
      headers,
    });

    if (__DEV__ && API_LOG) {
      console.log('url', url);
      console.log('data', data);
      console.log('headers', headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  postWithProgress(url, data, headers) {
    if (__DEV__ && API_LOG) {
      // console.log("url", url);
      // console.log("headers", headers);
    }
    const {CancelToken} = axios;
    let cancel;
    return eventChannel(emitter => {
      api
        .post(url, data, {
          headers,
          cancelToken: new CancelToken(c => {
            // An executor function receives a cancel function as a parameter
            cancel = c;
          }),
          onUploadProgress: e => {
            if (e.lengthComputable) {
              const progress = Math.round((e.loaded / e.total) * 100);
              emitter({progress, cancelToken: cancel});
            }
          },
        })
        .then(
          response => {
            if (response.ok && response.data && !response.data.error) {
              emitter({success: response.data});
              emitter(END);
            } else if (response.problem === 'NETWORK_ERROR') {
              emitter({err: ERROR_NETWORK_NOT_AVAILABLE});
              emitter(END);
            } else if (response.problem === 'CANCEL_ERROR') {
              emitter({cancelled: ERROR_CANCEL_ERROR});
              emitter(END);
            } else {
              emitter({err: ERROR_SOMETHING_WENT_WRONG});
              emitter(END);
            }
          },
          err => {
            if (err.problem === 'NETWORK_ERROR') {
              emitter({err: ERROR_NETWORK_NOT_AVAILABLE});
              emitter(END);
            } else if (err.problem === 'CANCEL_ERROR') {
              emitter({cancelled: ERROR_CANCEL_ERROR});
              emitter(END);
            } else {
              emitter({err: ERROR_SOMETHING_WENT_WRONG});
              emitter(END);
            }
          },
        );

      return () => {};
    });
  }

  manipulateResponse(response) {
    return new Promise((resolve, reject) => {
      if (response.ok && response.data && !response.data.error) {
        resolve(response.data);
      } else {
        if (response.status == 401) {
          // session expired, logout user forcefully
          logoutUserWithDispatch();
          // logoutUser();
        }

        if (response.status === 500) {
          reject(response?.data);
        }

        if (response.problem === 'NETWORK_ERROR') {
          reject(ERROR_NETWORK_NOT_AVAILABLE);
        }

        reject(response.data || ERROR_SOMETHING_WENT_WRONG);
      }
    });
  }
}

export default new ApiSauce();
