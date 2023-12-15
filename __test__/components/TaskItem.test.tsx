import React from 'react';
import {render} from '@testing-library/react-native';
import {TaskItem} from '../../src/components/TaskItem';

describe('TaskItem Component', () => {
  it('renders the task name correctly', () => {
    const taskName = 'Sample Task';
    const {getByText} = render(<TaskItem name={taskName} />);

    const taskTextElement = getByText(taskName);

    expect(taskTextElement).toBeDefined();
  });
});
