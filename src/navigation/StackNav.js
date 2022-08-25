import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Demo from '../screens/Demo';
import DrawerNav from './DrawerNav';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={DrawerNav} />
    </Stack.Navigator>
  );
};

export default StackNav;
