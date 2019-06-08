import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100vh;
    overflow: hidden;
  }

  body {
    font-family: GillSans;
    font-weight: normal;
  }
`;
