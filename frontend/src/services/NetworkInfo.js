import NetInfo from '@react-native-community/netinfo';

class NetworkInfo {
  // networkInfoListener(dispatch: any, networkInfoAction: any) {
  //   NetInfo.isConnected.fetch().then((isNetworkConnected: any) => {
  //     dispatch(networkInfoAction(isNetworkConnected));
  //   });
  //   NetInfo.isConnected.addEventListener(
  //     'connectionChange',
  //     (isNetworkConnected: any) => {
  //       dispatch(networkInfoAction(isNetworkConnected));
  //     },
  //   );
  // }
  // removeNetworkInfoListener(dispatch: any, networkInfoAction: any) {
  //   NetInfo.isConnected.removeEventListener(
  //     'connectionChange',
  //     (isNetworkConnected: any) => {
  //       dispatch(networkInfoAction(isNetworkConnected));
  //     },
  //   );
  // }
}

export default new NetworkInfo();
