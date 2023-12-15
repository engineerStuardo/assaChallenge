import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TaskModal} from '../../src/components/TaskModal';
import useTasks from '../../src/zustand/tasksStore';

jest.mock('../../src/zustand/tasksStore');

const mockedUseTasks = useTasks as jest.Mocked<typeof useTasks>;

describe('TaskModal Component', () => {
  it('renders correctly and adds a task', () => {
    const mockSetShowModal = jest.fn();

    const {getByPlaceholderText, getByText} = render(
      <TaskModal showModal={true} setShowModal={mockSetShowModal} />,
    );

    const inputElement = getByPlaceholderText('Enter task...');

    fireEvent.changeText(inputElement, 'New Task');

    const addButton = getByText('Add');

    fireEvent.press(addButton);

    expect(mockedUseTasks.mock.calls[0][0].setTasks).toHaveBeenCalledWith({
      name: 'New Task',
      id: expect.any(String),
    });
    expect(mockSetShowModal).toHaveBeenCalledWith(false);
  });
});
