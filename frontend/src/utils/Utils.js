// @flow
import {Platform, Alert, Linking, PermissionsAndroid} from 'react-native';
import moment from 'moment';
// import {DISCARD_WARNING} from '../constants';
import {AlertHelper} from '../services/AlertService';
import Toast from 'react-native-toast-message';

export const TIME1 = 'HH:mm';

let newInstance = null;

class Util {
  reduxStore = null;

  keyExtractor = (item, index) => index.toString();
  isPlatformAndroid() {
    return Platform.OS === 'android';
  }
  isValidURL(url) {
    const re =
      /^(http|https|fttp):\/\/|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(url);
  }
  isEmailValid(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  isPasswordValid(password) {
    return password.length > 7;
  }
  isValidPasswordFormat(password) {
    const passReg =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/;
    return passReg.test(password);
  }
  isValidName(name) {
    return /^[a-zA-Z '.-]*$/.test(name);
  }
  isValidQuantity(quantity) {
    return quantity > 0;
  }
  getValidImage(image) {
    if (typeof image === 'string' && this.isValidURL(image)) {
      return {uri: image};
    }
    // if (typeof image === "string" && !this.isValidURL(image)) {
    //   return require(image);
    // }
    return image;
  }

  DialogAlert(message, type = 'error') {
    Toast.show({
      text1: message,
      type: type,
      visibilityTime: 3000,
    });
    // if( AlertHelper.dropDown?.state && AlertHelper.dropDown.state.isOpen ) {
    //   AlertHelper.dropDown.close(()=> {
    //     this.setState({ isOpen: false })
    //   })
    // }
    // AlertHelper.show(type, title, message);
    // Alert.alert( title, message,
    //     [ {text: 'OK', onPress: () => newInstance && newInstance.state && newInstance.state.loading && newInstance.setState({ loading: false }) } ],
    //     {cancelable: true},
    // );
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  isRequiredMessage(field) {
    return `${this.capitalizeFirstLetter(field)} is required`;
  }

  isInvalidMessage(field) {
    return `Invalid ${this.capitalizeFirstLetter(field)}`;
  }

  getFormattedDateTime = (date, format) => {
    if (date) return moment(date).format(format);
    return '';
  };

  getDateObjectFromString = (date, format) => {
    if (date) return moment(date, format).toDate();
    return '';
  };

  showLoader = (instance, loadingFor = '') => {
    if (!instance.state.loading) {
      newInstance = instance;
      instance.setState({
        loading: true,
        loadingFor,
      });
    }
  };

  hideLoader = (instance, callback) => {
    if (instance.state.loading) {
      instance.setState(
        {
          loading: false,
          loadingFor: '',
        },
        callback,
      );
    }
  };

  getCurrentUserAccessToken() {
    return this.reduxStore.getState().user.access_token;
  }

  getDay(date) {
    var newDate = moment(date);
    return newDate.day();
  }

  getCurrentDate() {
    var currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth());
    var formatDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1 < 10
        ? `0${currentDate.getMonth() + 1}`
        : currentDate.getMonth() + 1
    }-${('0' + currentDate.getDate()).slice(-2)}`;
    return formatDate;
  }

  getErrorText(error) {
    if (error instanceof Array) {
      if (error.length > 0) return error[0];
    } else {
      return error;
    }
    return '';
  }

  discardAlert(onYesPress) {
    Alert.alert(
      'Discard?',
      'DISCARD_WARNING',
      [
        {text: 'Yes', onPress: onYesPress},
        {text: 'No', style: 'cancel'},
      ],

      {cancelable: true},
    );
  }

  isNumber(val) {
    return /^\d+$/.test(val);
  }

  openLinkInBrowser(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  }

  generateGetParameter(obj) {
    let final = '?';
    for (const key in obj) {
      final = `${final}${key}=${obj[key]}&`;
    }
    final = final.slice(0, -1);
    return final;
  }

  async getCoordinates() {
    /* eslint-disable */
    const self = this;
    return new Promise(async function (resolve, reject) {
      let granted = undefined;
      if (self.isPlatformAndroid()) {
        granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      } else {
        navigator.geolocation.requestAuthorization();
      }

      if (
        !self.isPlatformAndroid() ||
        (self.isPlatformAndroid() &&
          granted === PermissionsAndroid.RESULTS.GRANTED)
      ) {
        navigator.geolocation.getCurrentPosition(
          geo_success => {
            const {latitude, longitude} = geo_success.coords;
            resolve({latitude, longitude});
          },
          geo_error => {
            resolve(geo_error);
          },
          {enableHighAccuracy: false, timeout: 5000, maximumAge: 10000},
        );
      } else {
        resolve({error: 'Android permission required'});
      }
    });

    /* eslint-enable */
  }

  setStore(store) {
    this.reduxStore = store;
  }

  getStore() {
    return this.reduxStore;
  }

  secondsToHHMMSS = seconds => {
    seconds = Number(seconds);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    const hrs = h > 0 ? (h < 10 ? `0${h}:` : `${h}:`) : '';
    const mins = m > 0 ? (m < 10 ? `0${m}:` : `${m}:`) : '00:';
    const scnds = s > 0 ? (s < 10 ? `0${s}` : s) : '00';
    return `${hrs}${mins}${scnds}`;
  };
}

export default new Util();
