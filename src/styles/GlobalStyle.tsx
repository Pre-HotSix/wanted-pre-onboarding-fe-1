import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body,
  html {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 62.5%;
  box-sizing: border-box;
}
`;
