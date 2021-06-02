import * as React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const appWithRouter = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  appWithRouter,
  document.getElementById('root'),
);
