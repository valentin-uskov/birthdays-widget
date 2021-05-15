import store from './redux/store';
import Router from './pages/Router';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

const theme = {
  colors: {
    main: '#D80027',
    gradient: '#E8E8E8',
    text: {
      darkGray: '#333333',
      lightGray: '#666666',
      basic: '#000000',
    }
  },
  media: {
      mobile: '(max-width: 992px)',
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={ store }>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
