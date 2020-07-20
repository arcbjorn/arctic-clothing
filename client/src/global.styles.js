import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat';
    padding: 1% 5%;
    
    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    box-sizing: border-box;
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

`;