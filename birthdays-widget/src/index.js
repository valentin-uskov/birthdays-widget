import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

export function fontFace(name, src, fontWeight = 'normal', fontStyle = 'normal'){
    return `
      @font-face{
          font-family: "${name}";
          src: url(${require('./assets/fonts/' + src + '.eot')});
          src: url(${require('./assets/fonts/' + src + '.eot')}?#iefix) format("embedded-opentype"),
               url(${require('./assets/fonts/' + src + '.woff')}) format("woff"),
               url(${require('./assets/fonts/' + src + '.ttf')}) format("truetype"),
               url(${require('./assets/fonts/' + src + '.svg')}#${name}) format("svg");
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}

const GlobalStyle = createGlobalStyle`
  ${fontFace('VodafoneRg', 'VodafoneRg-Bold', 400, 'normal')}
  ${fontFace('VodafoneRg', 'VodafoneRg-Regular', 700, 'normal')}

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

