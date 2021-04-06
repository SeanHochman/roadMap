import styled, { css } from 'styled-components';

export const StageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  width: 375px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 15px 10px 10px;
`;

const commonButtonStyles = css`
  border: 2px solid black;
  outline: none;
  height: 30px;
  margin: 5px 0;
`;

export const ResetButton = styled.button`
  ${commonButtonStyles}
  background: #e06d6d;
`;

export const AddStageButton = styled.button`
  ${commonButtonStyles}
  background-color: #6695db;
  color: white;
`;