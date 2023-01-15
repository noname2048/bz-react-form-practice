import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    background: aliceblue;
    margin: 30px;
  }
`;

export default GlobalStyle;
