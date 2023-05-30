import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DropdownAnimation, LoginAnimation} from '../pages';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function ChartNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={(props: any) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="LoginAnimation"
        component={LoginAnimation}
        initialParams={{iconName: 'account-edit : matcom'}}
      />
      <Tab.Screen
          name="DropdownAnimation"
          component={DropdownAnimation}
          initialParams={{iconName: 'trending-down : Ionicons'}}
        />
    </Tab.Navigator>
  );
}
