import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { TaskType } from '../../types';
import { TaskForm } from '../TaskForm';

import {
  StageHeader,
  StageWrapper,
  TaskList,
  Task,
  AddTask,
  CheckBox,
  DisabledStage,
  RemoveTaskButton,
} from './styled';

type Props = {
  item: TaskType;
  idx: number;
  setStages: Dispatch<SetStateAction<TaskType[]>>;
  isVisible?: boolean;
};

export const Stage: FC<Props> = ({ item, idx, setStages, isVisible }) => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState<boolean>(false);

  const toggleTask = useCallback((i) => {
    setStages((prevState: TaskType[]) => [
      ...prevState.slice(0, idx),
      {
        ...prevState[idx],
        tasks: [
          ...prevState[idx].tasks.slice(0, i),
          {
            ...prevState[idx].tasks[i],
            completed: !prevState[idx].tasks[i]?.completed,
          },
          ...prevState[idx].tasks.slice(i + 1),
        ],
      },
      ...prevState.slice(idx + 1),
    ]);
  }, []);

  const isCompleted = useMemo(
    () => item?.tasks?.every((task) => task.completed),
    [item]
  );

  const handleAddTask = useCallback(() => {
    setIsTaskFormOpen(!isTaskFormOpen);
  }, [isTaskFormOpen]);

  const handleRemoveTask = useCallback((e, i) => {
    e.preventDefault();
    e.stopPropagation();
    setStages((prevState: TaskType[]) => {
      prevState[idx].tasks.splice(i, 1);
      return [
        ...prevState.slice(0, idx),
        {
          ...prevState[idx],
          tasks: prevState[idx].tasks,
        },
        ...prevState.slice(idx + 1),
      ];
    });
  }, []);

  useEffect(() => {
    if (isCompleted) {
      setStages((prevState) => [
        ...prevState.slice(0, idx),
        {
          ...prevState[idx],
          isStageCompleted: true,
        },
        ...prevState.slice(idx + 1),
      ]);
    }
    if (!isCompleted && item.isStageCompleted === true) {
      setStages((prevState) => [
        ...prevState.slice(0, idx),
        {
          ...prevState[idx],
          isStageCompleted: false,
        },
        ...prevState.slice(idx + 1),
      ]);
    }
  }, [isCompleted]);

  return (
    <StageWrapper>
      {!isVisible && <DisabledStage />}
      <StageHeader>
        <span>
          {idx + 1}: {item?.title}
        </span>
        {isCompleted && isVisible && <span>COMPLETE!</span>}
      </StageHeader>
      <TaskList>
        {item?.tasks?.map((task, i) => (
          <Task key={`task-${i}`} onClick={() => toggleTask(i)}>
            <CheckBox isCompleted={task.completed}>
              <span>{task.completed ? '✓' : ''}</span>
            </CheckBox>
            <span>{task.description}</span>
            <RemoveTaskButton onClick={(e) => handleRemoveTask(e, i)}>
              X
            </RemoveTaskButton>
          </Task>
        ))}
        {isTaskFormOpen && (
          <TaskForm
            setStages={setStages}
            idx={idx}
            setIsTaskFormOpen={setIsTaskFormOpen}
          />
        )}
        {!isTaskFormOpen && (
          <AddTask>
            <button onClick={handleAddTask}>add task +</button>
          </AddTask>
        )}
      </TaskList>
    </StageWrapper>
  );
};
