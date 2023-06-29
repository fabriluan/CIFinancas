import { styled } from 'styled-components';

export const Sing = styled.section`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 700px;
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

  a{
    margin: 0 auto;
    font-size: 1.2rem;
    margin-top: 5px;
    text-decoration: underline;
    text-align: center;
  }

  span{
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.layoutHover};
    border-radius: 0.5rem;
    padding: 10px;
    margin-bottom: -10px;
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

  input[name="name"]{

    ${(props) => (props.isAlertName ? (
    `border: 1px solid red;
    color: red;
    &::placeholder{ color: red; }`
  ) : (
    ''
  ))}
}

  input[name="email"]{

    ${(props) => (props.isAlertEmail ? (
    `border: 1px solid red;
      color: red;
      &::placeholder{ color: red; }`
  ) : (
    ''
  ))}
  }

  input[name="password"]{

    ${(props) => (props.isAlertPassword ? (
    `border: 1px solid red;
      color: red;
      &::placeholder{ color: red; }`
  ) : (
    ''
  ))}
  }

  span{
    width: 100%;
    z-index: 99;
    background-color: red;
  }
`;

export const ButtonForm = styled.button`
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
  background-color: ${(props) => (props.isVerif ? props.theme.content : props.theme.contentLigth)};
  cursor: ${(props) => (props.isVerif ? 'pointer' : 'not-allowed')};
  border: 0;
  border-radius: 0.5rem;

  @media screen and (max-width: 750px){
    width: 100%;
  }
`;
