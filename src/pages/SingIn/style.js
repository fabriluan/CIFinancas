import { styled } from 'styled-components';

export const Sing = styled.section`
  width: 100%;
  max-width: 950px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 40px;
  padding: 20px;
  color: ${(props) => props.theme.textLigth};
  background-color: ${(props) => props.theme.layout};
`;

export const Form = styled.form`

`;
