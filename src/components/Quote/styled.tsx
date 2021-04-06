import styled from 'styled-components';

export const QuoteWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: RGBA(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  & div {
    background-color: white;
    padding: 30px;
    width: 300px;
  }
`;
