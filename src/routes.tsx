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
          name="ToDo"
          component={TaskList}
          initialParams={{
            currentStatus: 'todo',
            nextStatus: 'doing',
            titleList: 'À fazer',
            descriptionList: 'Tarefas as serem feitas.',
          }}
        />
        <Stack.Screen
          name="Doing"
          component={TaskList}
          initialParams={{
            currentStatus: 'doing',
            nextStatus: 'done',
            titleList: 'Em andamento',
            descriptionList: 'Tarefas que estão sendo feitas.',
          }}
        />
        <Stack.Screen
          name="Done"
          component={TaskList}
          initialParams={{
            currentStatus: 'done',
            nextStatus: null,
            titleList: 'Concluído',
            descriptionList: 'Tarefas que já foram concluídas.',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
