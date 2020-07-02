import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TaskList from './pages/TaskList';

const Tab = createMaterialTopTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="TaskList" 
          component={TaskList} 
          initialParams={{
            currentStatus: 'todo', nextStatus: 'doing' 
          }} 
        />
        <Tab.Screen 
          name="Doing" 
          component={TaskList} 
          initialParams={{
            currentStatus: 'doing', nextStatus: 'done' 
          }} 
        />
        <Tab.Screen 
          name="Done" 
          component={TaskList} 
          initialParams={{
            currentStatus: 'done', nextStatus: null 
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
