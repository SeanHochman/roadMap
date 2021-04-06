import { Dispatch, FC, RefObject, SetStateAction, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useClickOutside } from '../../hooks';
import { TaskType } from '../../types';
import { CheckBox } from '../Stage/styled';
import { AddTaskForm } from './styled';

type Props = {
  setStages: Dispatch<SetStateAction<TaskType[]>>;
  idx: number;
  setIsTaskFormOpen: Dispatch<SetStateAction<boolean>>;
};

export const TaskForm: FC<Props> = ({ setStages, idx, setIsTaskFormOpen }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (newTask: { description: string; completed: boolean }) => {
    setStages((prevState: TaskType[]) => [
      ...prevState.slice(0, idx),
      {
        ...prevState[idx],
        tasks: [...prevState[idx].tasks, newTask],
      },
      ...prevState.slice(idx + 1),
    ]);
    setIsTaskFormOpen(false);
  };

  const ref = useRef();

  useClickOutside(
    ref,
    () => {
      setIsTaskFormOpen(false);
    },
    { disabled: null }
  );

  return (
    <AddTaskForm onSubmit={handleSubmit(onSubmit)}>
      <label className="completedLabel">
        <input
          className="completed"
          type="checkbox"
          {...register('completed')}
        />
        <CheckBox />
      </label>
      <input
        className="description"
        placeholder="Enter description"
        required={true}
        {...register('description')}
      />
      <input className="submit" type="submit" value="+" />
    </AddTaskForm>
  );
};
