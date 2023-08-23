import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@store/store';

ReactDOM.createRoot(document.querySelector('.page')!).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)





