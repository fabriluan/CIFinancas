import { styled } from 'styled-components';

export const EnterSt = styled.section`
  display: flex;
  flex-direction: column;

  h1{
    font-size: 1.7rem;
    font-weight: 700;
    /* margin-bottom: 5px; */
  }
`;

export const EnterSocial = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;

  button{
    cursor: pointer;
    display: flex;
    padding: 15px;
    border-radius: 2.5rem;
    border: 0;
    font-size: 1.6rem;
    margin-right: 20px;

    &:hover{
      transition: 0.7s;
      transform: scale(1.1);
    }
  }
`;
