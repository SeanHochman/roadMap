import { TaskType } from '../types';

export const initialData: TaskType[] = [
  {
    title: 'Foundation',
    isStageCompleted: false,

    tasks: [
      { description: 'Meet with investors', completed: false },
      { description: 'Buy Dogecoins', completed: false },
      { description: 'Go to vegas', completed: false },
      { description: 'Ponder life', completed: false },
    ],
  },
  {
    title: 'Next Stage',
    isStageCompleted: false,

    tasks: [
      { description: 'Sell an NFT', completed: false },
      { description: "Check Elon Musk's twitter", completed: false },
      { description: 'Exercise', completed: false },
      { description: 'Listen to Joe Rogan', completed: false },
    ],
  },
];
