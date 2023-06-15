import { styled } from 'styled-components';

const BenefitSt = styled.section`
  width: 28%;
  padding: 20px;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.backgroundLigth};
  color: ${(props) => props.theme.textDark};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg{
    font-size: 6.2rem;
  }

  h1{
    font-size: 2rem;
    font-weight: 600;
    margin-top: 20px;
  }

  span{
    text-align: center;
    font-size: 1.2rem;
    font-weight: 100;
    margin-top: 10px;
    /* padding: 0 15px; */
  }

  a{
    width: 70%;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
    padding: 10px 0;
    color: ${(props) => props.theme.textLigth};
    background-color: ${(props) => props.theme.layout};

    &:hover{
      transition: 0.7s;
      transform: scale(1.03);
      background-color: ${(props) => props.theme.layoutHover};
    }
  }

  @media screen and (max-width: 850px){
    width: 60%;
    margin-bottom: 30px;
    height: 400px;
  }

  @media screen and (max-width: 750px){
    width: 100%;

    a{
      margin-top: 40px;
    }
  }

  @media screen and (max-width: 500px){
    h1{
      font-size: 1.85rem;
    }

    span{
      font-size: 1.15rem;
    }
  }
`;

export default BenefitSt;
