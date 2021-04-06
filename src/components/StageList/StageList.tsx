import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { initialData } from '../../data/stages';
import { Stage } from '../Stage';
import { Title } from '../Title';
import { TaskType } from '../../types';
import { StageListWrapper, ResetButton, AddStageButton } from './styled';
import { Quote } from '../Quote';
import { useGetQuote } from '../../hooks';
import { NewStageForm } from '../NewStageForm';

const TASK_LIST_STORAGE = 'taskList';

export const StageList = () => {
  const [stages, setStages] = useState<TaskType[] | undefined>();
  const [isStageFormOpen, setIsStageFormOpen] = useState<boolean>(false);

  const { quote, setQuote } = useGetQuote(stages);

  useEffect(() => {
    if (!stages) {
      if (localStorage[TASK_LIST_STORAGE]) {
        const stagesFromMemory: TaskType[] = JSON.parse(
          localStorage.getItem(TASK_LIST_STORAGE)
        );
        setStages(stagesFromMemory);
      }
      if (!localStorage[TASK_LIST_STORAGE]) {
        localStorage.setItem(TASK_LIST_STORAGE, JSON.stringify(stages));
        setStages(initialData);
      }
    } else {
      localStorage.setItem(TASK_LIST_STORAGE, JSON.stringify(stages));
    }
  }, [stages]);

  const handleAddNewStage = useCallback(() => {
    setIsStageFormOpen(!isStageFormOpen);
  }, []);

  const handleReset = useCallback(() => {
    localStorage.clear();
    setStages(undefined);
  }, [stages]);

  return (
    <>
      {quote && <Quote quote={quote} setQuote={setQuote} />}
      <StageListWrapper>
        <Title />
        {stages?.map((item, idx) => (
          <Stage
            key={`stage-${idx}`}
            item={item}
            idx={idx}
            setStages={setStages}
            isVisible={
              idx === 0 ||
              stages[idx - 1].tasks?.every((task) => task.completed)
            }
          />
        ))}
        {isStageFormOpen && (
          <NewStageForm
            setStages={setStages}
            setIsStageFormOpen={setIsStageFormOpen}
            stages={stages}
          />
        )}
        <AddStageButton onClick={handleAddNewStage}>Add Stage</AddStageButton>
        <ResetButton onClick={handleReset}>Reset</ResetButton>
      </StageListWrapper>
    </>
  );
};
