import { styled } from 'styled-components';

export const Sing = styled.section`
  width: 100%;
  max-width: 950px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 750px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 30px 50px;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.textLigth};
  background-color: ${(props) => props.theme.layout};

  h2{
    font-size: 2.6rem;
    font-weight: 100;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 750px) {
    padding: 30px 10px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  > button{
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 50px;
    padding: 13px;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.textLigth};
    background-color: ${(props) => props.theme.content};
    border: 0;
    border-radius: 0.5rem;

    @media screen and (max-width: 750px){
      width: 100%;
    }
  }

  a{
    margin: 0 auto;
    font-size: 1.2rem;
    margin-top: 5px;
    text-decoration: underline;
    text-align: center;
  }
`;

export const GroupInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 20px;

  &+&{
    margin-top: 10px;
  }

  &+&+&{
    margin-top: 10px;
    /* margin-bottom: 20px; */
  }

  svg{
    position: absolute;
    color: black;
    font-size: 1.6rem;
    /* top: 0.3rem; */
    left: 10px;
  }

  input{
    width: 100%;
    padding: 6px;
    height: 50px;
    padding-left: 40px;
    font-size: 1.1rem;
  }
`;
