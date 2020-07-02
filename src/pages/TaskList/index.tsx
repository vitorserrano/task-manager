import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Overlay, Input, Button } from 'react-native-elements';

import { database } from '../../config/firebase';

import { AntDesign, Feather } from '@expo/vector-icons'; 
import styles from './styles';

interface Params {
  currentStatus: string,
  nextStatus: string,
}

interface Task {
  id: string;
  title: string;
  status: string;
}

const ToDo = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { currentStatus, nextStatus } = route.params as Params;
  const table = 'tasks';

  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Task Manager</Text>

          <View style={styles.statusButtonGroup}>
          <TouchableOpacity style={styles.statusButton}>
              <View style={styles.statusButtonIcon}>
                <Feather name="file-text" size={30} color="#7750fc" />
              </View>
              <Text style={styles.statusButtonText}>A fazer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.statusButton}>
              <View style={styles.statusButtonIcon}>
                <Feather name="check-circle" size={30} color="#7750fc" />
              </View>
              <Text style={styles.statusButtonText}>Em andamento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.statusButton}>
              <View style={styles.statusButtonIcon}>
                <Feather name="check-circle" size={30} color="#7750fc" />
              </View>
              <Text style={styles.statusButtonText}>Cloncluído</Text>
            </TouchableOpacity>
          </View>
        </View>

            
        <View style={styles.list}>
          <Text style={styles.listTitle}>A fazer</Text>
          <Text style={styles.listDescription}>Todas as tarefas a serem feitas.</Text>
        
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
          </View>
          
        <Overlay
          overlayStyle={styles.overlay} 
          isVisible={isVisible} 
          onBackdropPress={() => toggleOverlay}
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
    </SafeAreaView>
  </>
  );
};

export default ToDo;
