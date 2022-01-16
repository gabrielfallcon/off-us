import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family:  sans-serif;
    scroll-behavior: smooth;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  button {
    cursor: pointer;
    border: none;

    &:focus, &:active {
      outline: 0;
    }
  }
`; 

