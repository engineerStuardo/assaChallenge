import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Modal from 'react-native-modal';

import {Button} from './Button';
import useTasks from '../zustand/tasksStore';

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TaskModal = ({showModal, setShowModal}: Props) => {
  const [taskInput, setTaskInput] = useState('');

  const {tasks, setTasks} = useTasks();

  return (
    <Modal isVisible={showModal}>
      <View style={styles.container}>
        <View style={styles.bottomSpacer} />
        <TextInput
          style={styles.input}
          onChangeText={setTaskInput}
          value={taskInput}
        />
        <View style={styles.bottomSpacer} />
        <Button
          title="Add"
          onPress={() => {
            if (taskInput) {
              setTaskInput('');
              setTasks({name: taskInput, id: `${tasks.length + 1}`});
              setShowModal(false);
            }
          }}
        />
        <View style={styles.bottomSpacer} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  bottomSpacer: {
    marginBottom: 20,
  },
});
