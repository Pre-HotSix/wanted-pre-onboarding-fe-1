import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './routes/Router';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
