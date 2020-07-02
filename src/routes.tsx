import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TaskList from './pages/TaskList';

import { Ionicons } from '@expo/vector-icons'; 

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator    
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen 
          name="TaskList" 
          component={TaskList} 
          initialParams={{
            currentStatus: 'todo', nextStatus: 'doing' 
          }} 
        />
        <Stack.Screen 
          name="Doing" 
          component={TaskList} 
          initialParams={{
            currentStatus: 'doing', nextStatus: 'done' 
          }} 
        />
        <Stack.Screen 
          name="Done" 
          component={TaskList} 
          initialParams={{
            currentStatus: 'done', nextStatus: null 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
