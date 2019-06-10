import { createGlobalStyle } from 'styled-components';

import primaryBgImage from 'assets/images/bg-home.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${props => props.theme.color.white};
    text-transform: uppercase;
  }

  html {
    height: 100vh;
    overflow: hidden;
  }

  body {
    font-family: GillSans;
    font-weight: normal;
    background-image: radial-gradient(
      rgba(255, 255, 255, 0.25),
      rgba(0, 0, 0, 0.5)
    ),
    url(${primaryBgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  ul {
    list-style: none;
  }
`;
