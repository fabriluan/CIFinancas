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

export const AddOperation = styled.section`
  position: relative;
  width: 100%;
  margin-top: 20px;
  color: ${(props) => props.theme.textLigth};
  background-color: ${(props) => props.theme.content};
  padding: 15px;
`;

export const AddOperationButtonClose = styled.button`
  position: absolute;
  top: 15px;
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
`;
