import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ListItem} from '../components/ListItem';
import {getList} from '../services/ListService';
import {EmptyList} from '../components/EmptyList';

export interface ListData {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

export const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listData, setListData] = useState<ListData[]>([]);

  const fetchData = async () => {
    setListData((await getList()) || []);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={listData}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <ListItem item={item} />;
      }}
      ListEmptyComponent={<EmptyList description="Empty List..." />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
