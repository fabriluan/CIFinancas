import { styled } from 'styled-components';

export const DashboardSt = styled.section`
  margin: 40px 0;
`;

export const ContentInfosConte = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

`;

export const InfosConte = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  color: ${(props) => props.theme.textLigth};
  background-color: ${(props) => props.theme.content};
  padding: 20px 15px 30px 15px;

  h2{
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  h1{
    font-size: 1.6rem;

    l{
      color: ${(props) => (props.isNegative ? props.theme.warn : props.theme.sucess)};
    }
  }

  span{
    display: flex;
    font-size: 1.2rem;
    font-weight: 100;
    color: ${(props) => (props.isNegative ? props.theme.warn : props.theme.sucess)};
    margin-top: 10px;
  }

  svg{
    color: ${(props) => (props.isNegative ? props.theme.warn : props.theme.sucess)};
    position: absolute;
    font-size: 3.5rem;
    bottom: 20px;
    right: 10px;
  }
`;

export const InfosTotal = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  color: ${(props) => props.theme.textLigth};
  background-color: ${(props) => props.theme.layout};
  padding: 20px 15px 30px 15px;

  h2{
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  h1{
    font-size: 1.6rem;
  }

  span{
    display: flex;
    font-size: 1.2rem;
    font-weight: 100;
    margin-top: 10px;
  }

  svg{
    color: ${(props) => (props.isNegative ? props.theme.warn : props.theme.sucess)};
    position: absolute;
    font-size: 3.2rem;
    bottom: 20px;
    right: 10px;
  }
`;

export const ContentAddInfos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const ContentAddInfosButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonAddOperation = styled.button`
  background-color: ${(props) => props.theme.layout};
  border: 1px solid ${(props) => props.theme.layoutHover};
  font-size: 1.1rem;
  color: ${(props) => props.theme.textLigth};
  font-weight: 900;
  padding: 10px;

  &:hover{
    transition: 0.7s;
    scale: 1.01;
    background-color: ${(props) => props.theme.layoutHover};
  }
`;

export const ButtonHistoriOperation = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundLigth};
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  max-width: 230px;
  border-radius: 0.5rem;

  svg{
    display: flex;
    font-size: 1.4rem;
  }

  &:hover{
    transition: 0.7s;
    scale: 1.01;
    background-color: ${(props) => props.theme.backgroundContent};
  }
`;

export const AboutInfos = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  h2{
    font-size: 2rem;
    font-weight: 600;
    margin-top: 20px;
  }

  img{
    margin: 30px 0;
    width: 100%;
    max-width: 400px;
  }
`;

export const OperationAndHistory = styled.section`
  width: 100%;
  margin-top: 20px;
  display: flex;
`;

export const AddOperation = styled.section`
  position: relative;
  width: 70%;
  margin-right: auto;
  color: ${(props) => props.theme.textLigth};
  background-color: ${(props) => props.theme.content};
  padding: 15px;
`;

export const AddOperationButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  background-color: transparent;
  border: 0;

  svg{
    color: white;
  }
`;

export const AddOperationForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const GroupInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(2), &:nth-child(3){
    margin-top: 50px;
  }

  > div{
    display: flex;
    align-items: center;
    justify-content: center;

    span{
      font-weight: 100;
      font-size: 1.2rem;
      margin-left: 10px;
    }
  }

  select{
    width: 100%;
    max-width: 200px;
    font-size: 1.2rem;
    padding: 2px;
  }

  input[type="text"], input[type="date"]{
    width: 100%;
    border-radius: 0.5rem;
    max-width: 400px;
    font-size: 1.2rem;
    padding: 5px 7px;
  }

  input[type="date"]{
    max-width: 200px;
    font-size: 1rem;
  }

  input[type="checkbox"]{
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  textarea{
    border-radius: 0.5rem;
    padding: 10px;
    font-size: 1.1rem;
    width: 75%;
    resize: none;
    height: 150px;
  }

  button{
    background-color: ${(props) => props.theme.layout};
    border: 1px solid ${(props) => props.theme.layoutHover};
    color: ${(props) => props.theme.textLigth};
    padding: 7px;
    width: 20%;
    font-weight: 900;
    font-size: 1.3rem;
    border-radius: 0.5rem;
    margin-top: auto;
  }
`;

export const History = styled.section`
  width: 29%;
  padding: 15px;
  margin-left: auto;
  color: ${(props) => props.theme.textLigth};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.contentDark};

  h2{
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

export const HistoryAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.contentLigth};
  padding: 5px 10px;
  margin-top: 5px;

  h3{
    font-size: 1.1rem;
  }

  p{
    color: red;
  }

  button{
    background-color: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: ${(props) => props.theme.textLigth};
  }
`;
