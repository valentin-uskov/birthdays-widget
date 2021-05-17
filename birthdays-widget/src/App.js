import store from './redux/store';
import Router from './pages/Router';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

const theme = {
  colors: {
    main: '#D80027',
    gradientStart: '#E8E8E8',
    text: {
      darkGray: '#333333',
      lightGray: '#666666',
      basic: '#000000',
    }
  },
  media: {
      small: '(max-width: 640px)',
  }
}

const App = () =>
  <ThemeProvider theme={theme}>
    <Provider store={ store }>
      <Router />
    </Provider>
  </ThemeProvider>

export default App;
