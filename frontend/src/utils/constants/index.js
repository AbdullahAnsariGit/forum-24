import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';

export const paginationLimit = 10;
export const DEFAULT_LANGUAGE = 'en';
export const version = DeviceInfo.getVersion();
export const systemVersion = DeviceInfo.getSystemVersion();
export const platform = Platform.OS;
export const deviceUId = DeviceInfo.getUniqueId();
export const deviceType = DeviceInfo.getDeviceType();
export const hasNotch = DeviceInfo.hasNotch();

// export const DEFAULT_LANGUAGE = "cn";
export const APP_URL = '';
export const APP_DOMAIN = '';
export const QUERY_LIMIT = 10;
export const SAGA_ALERT_TIMEOUT = 500;
export const POST_VIEW_TIMEOUT = 2000;
export const IMAGE_QUALITY = 1;
export const IMAGE_MAX_WIDTH = 720;
export const IMAGE_MAX_HEIGHT = 480;
export const IMAGE_COMPRESS_MAX_WIDTH = 720;
export const IMAGE_COMPRESS_MAX_HEIGHT = 480;
export const VERSES_OF_THE_DAY_LIMIT = 10;
export const IMAGE_COMPRESS_FORMAT = 'JPEG';
export const ANDROID_NOTI_CHANNEL = 'VeteranAppChanel';

// date time formats
export const DATE_FORMAT1 = 'dddd, DD MMMM, YYYY';
export const DATE_FORMAT2 = 'DD MMM YYYY';
export const DATE_FORMAT3 = 'YYYY-MM-DD';
export const TIME_FORMAT1 = 'hh:mm A';
export const TIME_FORMAT2 = 'HH:mm ';

export const DATE_FORMAT_TIME1 = 'Do | MMM | HH';
export const DATE_FORMAT4 = 'dddd, DD MMMM YYYY';
export const DATE_FORMAT5 = 'MMM DD, YYYY';
