import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '../Screens/Main';

const Drawer = createDrawerNavigator();

function DrawerAppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} />
    </Drawer.Navigator>
  );
}
export default DrawerAppNavigator;
