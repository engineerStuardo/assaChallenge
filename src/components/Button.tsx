import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ADD8E6',
    paddingVertical: 20,
    width: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
});
