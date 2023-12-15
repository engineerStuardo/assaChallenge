import React, {useState} from 'react';
import {ListData} from '../screens/List';
import {Image, StyleSheet, Text, View} from 'react-native';

export const ListItem = ({item}: {item: ListData}) => {
  const [isError, setIsError] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: isError
            ? 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp'
            : item.avatar,
        }}
        onError={() => {
          setIsError(true);
        }}
      />
      <View style={styles.leftSpace} />
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderColor: 'gray',
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  leftSpace: {
    marginLeft: 20,
  },
});
