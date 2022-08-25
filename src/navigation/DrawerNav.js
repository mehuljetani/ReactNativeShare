import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Practice from '../screens/Practice';
import Home from '../screens/Home';
import TabNav from './TabNav';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Practice"
        component={Practice}
        options={{drawerActiveTintColor: 'red', drawerLabel: 'red'}}
      />
      <Drawer.Screen name="Home" component={TabNav} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
