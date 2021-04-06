import styled, { css } from 'styled-components';

export const StageWrapper = styled.div`
  position: relative;
`;

export const DisabledStage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: RGBA(255, 255, 255, 0.7);
  pointer-events: none;
  z-index: 99;
`;

export const StageHeader = styled.h2`
  display: flex;
  justify-content: space-between;
`;

export const TaskList = styled.ul`
  list-style: none;
`;

export const RemoveTaskButton = styled.button`
  outline: none;
  background: red;
  display: none;
  border: 2px solid black;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  color: white;
  margin: 0;
  font-weight: bold;
  cursor: pointer;
`;

export const Task = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin: 15px 0;
  height: 25px;
  justify-content: space-between;

  :hover {
    ${RemoveTaskButton} {
      display: block;
    }
  }
`;

export const AddTask = styled.li`
  & button {
    font-weight: bold;
    font-size: 1.2rem;
    border: none;
    outline: none;
    background-color: white;
  }
`;

type CheckBoxType = { isCompleted?: boolean };

export const CheckBox = styled.span<CheckBoxType>`
  position: absolute;
  cursor: pointer;
  left: -30px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 2px solid black;
  font-size: 16px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      background-color: #60ff60;
    `}
`;
