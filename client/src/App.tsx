import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { GlobalStyle } from './styles/GlobalStyle';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}
