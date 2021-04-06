import styled from 'styled-components';
import { CheckBox } from '../Stage/styled';
import { submitStyles } from '../TaskForm/styled';

export const StageForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  .title {
    border: 0;
    border-bottom: 1px solid black;
    font-size: 24px;
    font-weight: bold;
    outline: none;
    background-color: none;
  }

  .submit {
    ${submitStyles}
    top: 25px;
  }
`;
