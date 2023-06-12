import { styled } from 'styled-components';

export const FooterSt = styled.footer`
  background-color: ${(props) => props.theme.layout};
  color: ${(props) => props.theme.textLigth};
  padding: 30px 0px 10px 0;
  display: flex;
  flex-direction: column;

  > .center{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const FooterText = styled.section`

  width: 30%;

  h2{
    font-size: 1.75rem;
    margin-bottom: 10px;
  }

  span{
    font-size: 1.2rem;
  }
`;

export const FooterEmail = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;

  h2{
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
`;

export const EmailInfo = styled.form`
  display: flex;
  align-items: center;

  input{
    width: 45%;
    padding: 7px 5px;
    font-size: 1rem;
    color: ${(props) => props.theme.textLigth};
    background-color: ${(props) => props.theme.content};
    border: 1px solid ${(props) => props.theme.contentDark};

    &::placeholder{
      color: ${(props) => props.theme.backgroundContent};
    }
  }

  button{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    width: 50px;
    height: 100%;
    background-color: ${(props) => props.theme.background};
    /* border: 1px solid ${(props) => props.theme.contentDark}; */
    border: 0;

    svg{
      font-size: 1.3rem;
    }

    &:hover{
      transition: 0.7s;
      background-color: ${(props) => props.theme.backgroundContent};
    }
  }
`;

export const FoooterSocial = styled.div`
  h2{
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  div{
    display: flex;
    justify-content: space-between;
  }

  svg{
    display: flex;
    font-size: 2.2rem;
    padding: 3px;
    margin-right: 20px;

    &:hover{
      transition: 0.7s;
      transform: scale(1.15);
    }
  }

`;

export const FooterCredit = styled.section`
  padding: 10px;
  font-size: 1rem;
  padding: 10px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.backgroundLigth};
  margin-top: 25px;

  a{
    &:hover{
      text-decoration: underline;
    }
  }
`;
