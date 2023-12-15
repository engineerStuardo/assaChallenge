import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const TaskItem = ({name}: {name: string}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  },
});
