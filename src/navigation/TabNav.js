import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Demo from '../screens/Demo';
import Practice from '../screens/Practice';
import Dashboard from '../screens/Dashboard';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Demo" component={Demo} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
};

export default TabNav;
