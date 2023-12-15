import {create} from 'zustand';

interface Task {
  name: string;
  id: string;
}

interface TasksStore {
  tasks: Task[];
  setTasks: (task: Task) => void;
}

const useTasks = create<TasksStore>((set, get) => ({
  tasks: [],
  setTasks: task => {
    set({tasks: [...get().tasks, task]});
  },
}));

export default useTasks;
