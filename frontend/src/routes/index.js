// @app
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Orientation from 'react-native-orientation-locker';
// @navigations
import AuthNavigation from './stacks/authNavigation';
import AppNavigation from './stacks/appNavigation';
import {_AppLayout} from '../redux/actions';
// Nav Service
import NavService from '../helpers/NavService';

class MainNavigation extends Component {
  componentDidMount() {
    Orientation.lockToPortrait();
    SplashScreen.hide();
  }
  render() {
    const loggedInUser = this.props?.user;
    return (
      <NavigationContainer ref={ref => NavService.setTopLevelNavigator(ref)}>
        <View style={styles.container}>
          {/* IF USER PROFILE STORE IS NOT EMPTY */}
          {loggedInUser ? (
            <AppNavigation initialRoute={undefined} />
          ) : (
            // <AppNavigation initialRoute={undefined} />
            <AuthNavigation initialRoute={undefined} />
          )}
          {/* IF USER PROFILE STORE IS EMPTY */}
        </View>
      </NavigationContainer>
    );
  }
}
function mapStateToProps({authReducer: {user}}) {
  return {
    user: user,
  };
}

export default connect(mapStateToProps)(MainNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
