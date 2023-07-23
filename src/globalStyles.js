import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,body,#root{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  body{
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textDark};
    font-family: 'Open Sans', sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  button{
    cursor: pointer;
  }

  .classCenter{
    display: flex;
    justify-content: center;
    justify-content: center;
  }
`;

export default GlobalStyles;
