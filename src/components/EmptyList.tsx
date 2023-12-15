import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  description: string;
}

export const EmptyList = ({description}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '800',
  },
});
