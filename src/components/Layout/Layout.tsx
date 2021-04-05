import { useEffect, useState } from 'react';
import { Stage } from '../Stage';
import { Title } from '../Title';
import { LayoutWrapper } from './styled';

const TASK_LIST_STORAGE = 'taskList';

export type TaskType = {
  title: string;
  completed: boolean;
  tasks: { description: string; completed: boolean }[];
};

const initialData: TaskType[] = [
  {
    title: 'Foundation',
    completed: false,
    tasks: [
      { description: 'meet with investors', completed: false },
      { description: 'do something', completed: false },
      { description: 'go to vegas', completed: false },
      { description: 'profit', completed: false },
    ],
  },
];

export const Layout = () => {
  const [stages, setStages] = useState<TaskType[]>(initialData);

  useEffect(() => {
    if (localStorage[TASK_LIST_STORAGE]) {
      const stagesFromMemory: TaskType[] = JSON.parse(
        localStorage.getItem(TASK_LIST_STORAGE)
      );
      setStages(stagesFromMemory);
    }
    if (!localStorage[TASK_LIST_STORAGE]) {
      localStorage.setItem(TASK_LIST_STORAGE, JSON.stringify(stages));
    }
  }, []);

  return (
    <LayoutWrapper>
      <Title />
      {stages.map(({ title, tasks, completed }, i) => (
        <Stage
          title={title}
          tasks={tasks}
          completed={completed}
          stageNumber={i + 1}
        />
      ))}
    </LayoutWrapper>
  );
};
