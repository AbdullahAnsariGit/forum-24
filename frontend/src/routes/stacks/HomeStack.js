// @app
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// @stack screens

import Home from '../../screens/Main/Home';

const Stack = createNativeStackNavigator();

const HomeStack = ({initialRoute}) => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="HomeStack" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
