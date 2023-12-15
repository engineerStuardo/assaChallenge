import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeScreenProps} from '../navigation/types';
import {Button} from '../components/Button';

export const Home = ({navigation}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Button title="Tasks" onPress={() => navigation.navigate('tasks')} />
      <View style={styles.spacer} />
      <Button title="List" onPress={() => navigation.navigate('list')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    marginBottom: 10,
  },
});
