import * as React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './store/index';

const getStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const appProvider = (
  <Provider store={getStore}>
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
