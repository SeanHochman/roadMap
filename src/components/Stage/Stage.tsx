import { FC } from 'react';
import { TaskType } from '../Layout/Layout';

type Props = TaskType & {
  stageNumber: number;
};

export const Stage: FC<Props> = ({ tasks, completed, title, stageNumber }) => {
  return (
    <div>
      <h2>
        {stageNumber}: {title}
      </h2>
      <ul>
        {tasks.map((task) => (
          <li>{task.description}</li>
        ))}
      </ul>
    </div>
  );
};
