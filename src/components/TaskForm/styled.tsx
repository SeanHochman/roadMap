import styled, { css } from 'styled-components';
import { CheckBox } from '../Stage/styled';

export const submitStyles = css`
  position: absolute;
  right: 0;
  top: 0;
  border: 0;
  outline: 0;
  background-color: #7ccdfc;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  color: white;
  border: 2px solid black;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AddTaskForm = styled.form`
  display: flex;
  position: relative;

  .completedLabel {
    position: relative;
  }

  .completed {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .completed:checked ~ ${CheckBox} {
    background-color: #60ff60;

    :after {
      content: '✓';
      font-size: 16px;
      font-weight: bold;
    }
  }

  .description {
    border: 0;
    border-bottom: 1px solid black;
    height: 20px;
    width: 200px;
  }

  .submit {
    ${submitStyles}
  }
`;
