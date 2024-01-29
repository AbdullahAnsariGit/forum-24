import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../../components/TabbarComponent';
import Home from '../../screens/Main/Home';
import {colors} from '../../utils';
import LeaderBoard from '../../screens/Main/LeaderBoard/LeaderBoard';
import Stats from '../../screens/Main/Stats/Stats';
import Messages from '../../screens/Main/Messages/Messages';
import MyGoals from '../../screens/Main/MyGoals/MyGoals';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: colors.gray},
        animation: 'simple_push',
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName={'Home'}>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Stats" component={Stats} /> */}
      {/* <Tab.Screen name="tabBar4" component={Home} /> */}
      {/* <Tab.Screen name="Messages" component={Messages} /> */}
      {/* <Tab.Screen name="MyGoals" component={MyGoals} /> */}
    </Tab.Navigator>
  );
};
