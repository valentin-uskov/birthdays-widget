import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import VodafoneRgRegularWOFF2 from './assets/fonts/VodafoneRg-Regular.woff2';
import VodafoneRgRegularWOFF from './assets/fonts/VodafoneRg-Regular.woff';
import VodafoneRgBoldWOFF2 from './assets/fonts/VodafoneRg-Bold.woff2';
import VodafoneRgBoldWOFF from './assets/fonts/VodafoneRg-Bold.woff';

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: "VodafoneRg";
    src: url(${VodafoneRgRegularWOFF}) format("woff"),
         url(${VodafoneRgRegularWOFF2}) format("woff2");
    font-style: normal;
    font-weight: 400;
  }

  @font-face{
    font-family: "VodafoneRg";
    src: url(${VodafoneRgBoldWOFF}) format("woff"),
         url(${VodafoneRgBoldWOFF2}) format("woff2");
    font-style: normal;
    font-weight: 700;
  }

  * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.3;
    font-family: VodafoneRg, sans-serif;
    font-weight: 400;
  }
`
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

