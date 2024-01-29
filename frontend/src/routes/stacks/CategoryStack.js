// @app
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// @stack screens
import Category from '../../screens/Main/Category';

const Stack = createNativeStackNavigator();

const CategoryStack = ({initialRoute}) => {
  return (
    <Stack.Navigator
      initialRouteName="Category"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
};

export default CategoryStack;
