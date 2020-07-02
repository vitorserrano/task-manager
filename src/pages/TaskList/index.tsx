import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Overlay, Input, Button } from 'react-native-elements';

import { database } from '../../config/firebase';

import { AntDesign, Feather } from '@expo/vector-icons'; 
import styles from './styles';

interface Task {
  id: string;
  title: string;
  status: string;
}

interface Params {
  currentStatus: string,
  nextStatus: string,
}

const ToDo = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { currentStatus, nextStatus } = route.params as Params;
  const table = 'tasks';

  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  const toggleOverlay = () => setIsVisible(!isVisible);

  const handleAddTask = async () => {
    try {
      database.collection(table).add({
        title: title,
        status: currentStatus,
      });

      setIsVisible(false); 
      setTitle('');
    } catch (error) {
      alert(error.message);
    }
  }

  const handleUpdateTask = async (id: string) => {
    try {
      database
        .collection(table)
        .doc(id)
        .update({
          status: nextStatus,
        });
 
    } catch (error) {
      alert(error.message);
    }
  }

  const handleRemoveTask = async (id: string) => {
    try {
      database
        .collection(table)
        .doc(id)
        .delete();
 
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    database
      .collection(table)
      .where('status', '==', currentStatus)
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
  <>
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(tasks) => String(tasks.id)}
        renderItem={({ item: task }) => (
          <View style={styles.listItem}>
            <Text>{task.title}</Text>
            <View style={styles.buttonGroup}>
                <TouchableOpacity onPress={() => handleRemoveTask(task.id)}>
                  <Feather name="trash" size={24} color="#f45" />
                </TouchableOpacity>
 
              {nextStatus && (
                <TouchableOpacity onPress={() => handleUpdateTask(task.id)}>
                  <AntDesign name="arrowright" size={24} color="#666" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />

      <Overlay 
        overlayStyle={styles.overlay} 
        isVisible={isVisible} 
        onBackdropPress={toggleOverlay}
      >
        <Text>Cadastrar a tarefa</Text>
        <Input 
          placeholder="Escreva sua tarefa" 
          value={title} 
          onChangeText={setTitle} 
        />
        <Button title="Adicionar" onPress={handleAddTask} />
      </Overlay>
    </View>

    <TouchableOpacity 
      style={styles.fabButton}
      onPress={toggleOverlay}
    >
      <AntDesign name="plus" size={32} color="#eeee" />
    </TouchableOpacity>
  </>
  );
};

export default ToDo;
