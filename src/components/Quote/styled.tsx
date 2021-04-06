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

  & blockquote {
    background-color: white;
    padding: 30px;
    width: 300px;
    display: flex;
    flex-direction: column;
    & cite {
      text-align: right;
      width: 100%;
    }
  }
`;
