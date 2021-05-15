import * as React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './store/index';

const store = createStore(rootReducer);

const appProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);

const appWithRouter = (
  <BrowserRouter>
    {appProvider}
  </BrowserRouter>
);

ReactDOM.render(
  appWithRouter,
  document.getElementById('root'),
);
