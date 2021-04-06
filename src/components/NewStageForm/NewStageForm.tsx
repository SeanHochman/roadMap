import { Dispatch, FC, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { TaskType } from '../../types';

import { StageForm } from './styled';

type Props = {
  setIsStageFormOpen: Dispatch<SetStateAction<boolean>>;
  stages: TaskType[];
  setStages: Dispatch<SetStateAction<TaskType[]>>;
};

export const NewStageForm: FC<Props> = ({
  stages,
  setStages,
  setIsStageFormOpen,
}) => {
  const { register, handleSubmit } = useForm<TaskType>();

  const onSubmit = (newStage: any) => {
    console.log(newStage);
    setStages((prevState: TaskType[]) => [
      ...prevState,
      {
        title: newStage.title,
        isStageCompleted: false,
        tasks: [],
      },
    ]);
    setIsStageFormOpen(false);
  };
  return (
    <StageForm onSubmit={handleSubmit(onSubmit)}>
      <h2>
        <span>{stages.length + 1}: </span>
        <input
          className="title"
          placeholder="Enter Title"
          required={true}
          {...register('title')}
        />
        <input className="submit" type="submit" value="+" />
      </h2>
    </StageForm>
  );
};
