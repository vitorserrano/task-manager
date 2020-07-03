import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { View, Text, FlatList, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Overlay } from 'react-native-elements';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { showMessage, hideMessage } from "react-native-flash-message";

import { database } from '../../config/firebase';

import { AntDesign, Feather, Octicons } from '@expo/vector-icons';
import styles from './styles';

interface Params {
  currentStatus: string,
  nextStatus: string,
  titleList: string,
  descriptionList: string,
}

interface Task {
  id: string;
  title: string;
  status: string;
}

const ToDo = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { currentStatus, nextStatus, titleList, descriptionList } = route.params as Params;

  let currentIcon: string = '';

  if (currentStatus === 'todo') {
    currentIcon = 'file-text';
  }

  if (currentStatus === 'doing') {
    currentIcon = 'list';
  }

  if (currentStatus === 'done') {
    currentIcon = 'check-circle';
  }

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
      let nextName: string = '';

      if (currentStatus === 'todo') {
        nextName = 'em andamento';
      }

      if (currentStatus === 'doing') {
        nextName = 'concluída';
      }

      database
        .collection(table)
        .doc(id)
        .update({
          status: nextStatus,
        });

      showMessage({
        message: "Sucesso!",
        description: "A tarefa agora estã " + nextName,
        type: "success",
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

        showMessage({
          message: "Sucesso!",
          description: "A tarefa foi excluída!",
          type: "success",
        });
    } catch (error) {
      alert(error.message);
    }
  }

  const LeftActions = () => {
    let icon: string = '';

    if (currentStatus === 'todo') {
      icon = 'list';
    }

    if (currentStatus === 'doing') {
      icon = 'check-circle';
    }

    return (
      <View style={styles.leftAction}>
        <Feather name={icon} size={30} color="#fff" />
      </View>
    );
  }

  const RightActions = () => {
    return (
      <View style={styles.rightAction}>
        <Feather name="trash" size={24} color="#fff" />
      </View>
    );
  }

  const navigateToToDo = () => {
    navigation.navigate('ToDo');
  }

  const navigateToToDoing = () => {
    navigation.navigate('Doing');
  }

  const navigateToToDone = () => {
    navigation.navigate('Done');
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
            <TouchableOpacity style={styles.statusButton} onPress={navigateToToDo}>
              <View style={styles.statusButtonIcon}>
                <Feather name="file-text" size={30} color="#7750fc" />
              </View>
              <Text style={styles.statusButtonText}>A fazer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.statusButton} onPress={navigateToToDoing}>
              <View style={styles.statusButtonIcon}>
                <Feather name="list" size={30} color="#7750fc" />
              </View>
              <Text style={styles.statusButtonText}>Em andamento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.statusButton} onPress={navigateToToDone}>
              <View style={styles.statusButtonIcon}>
                <Feather name="check-circle" size={30} color="#7750fc" />
              </View>
              <Text style={styles.statusButtonText}>Cloncluído</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.list}>
          <Text style={styles.listTitle}>{titleList}</Text>
        <Text style={styles.listDescription}>{descriptionList}</Text>

          <FlatList
            data={tasks}
            keyExtractor={(tasks) => String(tasks.id)}
            renderItem={({ item: task }) => (
              <>
                {nextStatus && (
                  <Swipeable
                  renderLeftActions={LeftActions}
                  renderRightActions={RightActions}
                  onSwipeableLeftOpen={() => handleUpdateTask(task.id)}
                  onSwipeableRightOpen={() => handleRemoveTask(task.id)}
                  >
                  <View style={styles.listItem}>
                    <View style={styles.listIcon}>
                      <Feather name={currentIcon} size={24} color="#7750fc" />
                    </View>
                    <Text style={styles.listText}>{task.title}</Text>
                    </View>
                </Swipeable>
                )}

                {!nextStatus && (
                  <Swipeable
                  renderRightActions={RightActions}
                  onSwipeableRightOpen={() => handleRemoveTask(task.id)}
                  >
                  <View style={styles.listItem}>
                    <View style={styles.listIcon}>
                      <Feather name={currentIcon} size={24} color="#7750fc" />
                    </View>
                    <Text style={styles.listText}>{task.title}</Text>
                  </View>
                </Swipeable>
                )}
              </>
            )}
          />
          </View>

        <Overlay
          overlayStyle={styles.overlay}
          isVisible={isVisible}
          onBackdropPress={() => toggleOverlay}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.overlayTitle}>Cadastrar tarefa</Text>
            <TextInput
              style={styles.overlayInput}
              placeholder="Título da tarefa"
              value={title}
              onChangeText={setTitle}
            />
            <TouchableOpacity style={styles.overlayButton} onPress={handleAddTask}>
              <Text style={styles.overlayButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
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
