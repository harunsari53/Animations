import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChartNavigator from './chart-navigator';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ChartNavigator" component={ChartNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;