import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens/Home';
import {Tasks} from '../screens/Tasks';
import {List} from '../screens/List';
import {StackParamList} from './types';

const Stack = createStackNavigator<StackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen
          name="tasks"
          component={Tasks}
          options={{headerShown: true, headerTitle: 'Tasks Screen'}}
        />
        <Stack.Screen
          name="list"
          component={List}
          options={{headerShown: true, headerTitle: 'List Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
