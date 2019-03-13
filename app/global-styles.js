import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  div::-webkit-scrollbar-track {
    background-color: #fafafa;
  }

  div::-webkit-scrollbar {
    width: 5px;
    background-color: #eaeaea;
  }

  div::-webkit-scrollbar-thumb {
    background-color: #eaeaea;  
  }
`;

export default GlobalStyle;
