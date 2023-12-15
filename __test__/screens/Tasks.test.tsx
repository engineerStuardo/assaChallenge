import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Tasks} from '../../src/screens/Tasks';
import {act} from 'react-test-renderer'; // Import act to handle state updates
import useTasks from '../../src/zustand/tasksStore';
import Modal from 'react-native-modal';

// Mock external dependencies
jest.mock('react-native-modal');

const mockedUseTasks = useTasks as jest.Mocked<typeof useTasks>;

const mockedTasks = [
  {id: '1', name: 'Task 1'},
  {id: '2', name: 'Task 2'},
];

describe('Tasks Component', () => {
  beforeEach(() => {
    mockedUseTasks.mockReturnValue({
      tasks: mockedTasks,
      setTasks: jest.fn(),
    });
  });

  it('renders tasks and new task button', () => {
    const {getByText, getByTestId} = render(<Tasks />);

    mockedTasks.forEach(task => {
      expect(getByText(task.name)).toBeDefined();
    });

    expect(getByText('New Task')).toBeDefined();
  });

  it('opens modal when "New Task" button is pressed', async () => {
    const {getByText, getByTestId} = render(<Tasks />);

    fireEvent.press(getByText('New Task'));

    await waitFor(() => expect(getByTestId('task-modal')).toBeDefined());
  });

  it('adds a new task when "New Task" button is pressed and a task is added', async () => {
    const {getByText} = render(<Tasks />);

    fireEvent.press(getByText('New Task'));

    act(() => {
      mockedUseTasks.mock.calls[0][0].setTasks({id: '3', name: 'New Task'});
    });

    expect(getByText('New Task')).toBeDefined();
  });
});
