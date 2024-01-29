// @app
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// @stack screens
import CheckOutfit from '../../screens/Main/CheckOutfit';

const Stack = createNativeStackNavigator();

const CheckOutfitStack = ({initialRoute}) => {
  return (
    <Stack.Navigator
      initialRouteName="CheckOutfit"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="CheckOutfit" component={CheckOutfit} />
    </Stack.Navigator>
  );
};

export default CheckOutfitStack;
