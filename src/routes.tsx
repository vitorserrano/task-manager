import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ToDo from './pages/ToDo';
import Doing from './pages/Doing';
import Done from './pages/Done';

const Tab = createMaterialTopTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ToDo" component={ToDo} />
        <Tab.Screen name="Doing" component={Doing} />
        <Tab.Screen name="Done" component={Done} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
