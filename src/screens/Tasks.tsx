import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {Button} from '../components/Button';
import useTasks from '../zustand/tasksStore';
import {TaskModal} from '../components/TaskModal';
import {EmptyList} from '../components/EmptyList';
import {TaskItem} from '../components/TaskItem';

export const Tasks = () => {
  const [showModal, setShowModal] = useState(false);

  const {tasks} = useTasks();

  return (
    <View style={styles.container}>
      <TaskModal showModal={showModal} setShowModal={setShowModal} />
      <View style={styles.alignButton}>
        <Button
          title="New Task"
          onPress={() => {
            setShowModal(true);
          }}
        />
      </View>
      <View style={styles.spacer} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TaskItem name={item.name} />}
        ListEmptyComponent={<EmptyList description="Empty List of Tasks..." />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 5,
  },
  spacer: {
    marginBottom: 20,
  },
  alignButton: {
    alignSelf: 'center',
  },
});
