import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    box-sizing: border-box;
  }
  input, button, textarea {
    font-family: inherit;
    border: none;
  }
  html, body, #root {
    height: 100%;
  }
  a, a:hover, a:link, a:visited {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default GlobalStyles;
