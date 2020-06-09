import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import { database } from '../../config/firebase';

import styles from './styles';

interface Task {
  id: string;
  title: string;
  status: string;
}

const ToDo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const current = 'todo';
  const table = 'tasks';

  useEffect(() => {
    database
      .collection(table)
      .where('status', '==', current)
      .onSnapshot((query) => {
        const items: any[] = [];

        query.forEach((doc) => {
          items.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setTasks(items);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(tasks) => String(tasks.id)}
        renderItem={({ item: task }) => (
          <View style={styles.listItem}>
            <Text>{task.id}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ToDo;
