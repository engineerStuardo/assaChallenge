// MyComponent.test.js
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Home} from '../../src/screens/Home';
import {
  HomeScreenNavigationProp,
  StackParamList,
} from '../../src/navigation/types';
import {StackNavigationProp} from '@react-navigation/stack';

const navigationMock: HomeScreenNavigationProp = {
  navigate: jest.fn() as StackNavigationProp<
    StackParamList,
    'home'
  >['navigate'],
};

describe('Testing Home Screen', () => {
  it('Testing we render correctly both buttons on screen.', () => {
    const {getByText} = render(<Home navigation={navigationMock} />);

    expect(getByText('Tasks')).toBeTruthy();
    expect(getByText('List')).toBeTruthy();
  });
  it('Testing navigation when "Tasks" button is pressed it should navigate to "tasks".', () => {
    const {getByText} = render(<Home navigation={navigationMock} />);
    const tasksButton = getByText('Tasks');
    fireEvent.press(tasksButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('tasks');
  });

  it('Testing navigation when "List" button is pressed it should navigate to "list".', () => {
    const {getByText} = render(<Home navigation={navigationMock} />);
    const listButton = getByText('List');
    fireEvent.press(listButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('list');
  });
});
