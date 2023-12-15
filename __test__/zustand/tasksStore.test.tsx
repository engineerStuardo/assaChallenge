import {renderHook, act} from '@testing-library/react-hooks';
import useTasks from '../../src/zustand/tasksStore';

describe('useTasks', () => {
  it('should add a task to the tasks array', () => {
    const {result} = renderHook(() => useTasks());

    expect(result.current.tasks).toHaveLength(0);

    act(() => {
      result.current.setTasks({name: 'Task 1', id: '1'});
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0]).toEqual({name: 'Task 1', id: '1'});
  });
});
