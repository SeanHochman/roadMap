import { TaskType } from '../types';

export const initialData: TaskType[] = [
  {
    title: 'Foundation',
    isStageCompleted: false,

    tasks: [
      { description: 'meet with investors', completed: false },
      { description: 'do something', completed: false },
      { description: 'go to vegas', completed: false },
      { description: 'profit', completed: false },
    ],
  },
  {
    title: 'Next Stage',
    isStageCompleted: false,

    tasks: [
      { description: 'do a thing', completed: false },
      { description: 'do something else', completed: false },
      { description: 'exercise', completed: false },
      { description: 'profit', completed: false },
    ],
  },
];
