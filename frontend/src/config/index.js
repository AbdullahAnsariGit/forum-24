// @flow
import {LogBox} from 'react-native';

const settings = {
  yellowBox: __DEV__,
};

export default () => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    // console.disableYellowBox = !settings.yellowBox;
    LogBox.ignoreAllLogs(!settings.yellowBox);
  }
};
