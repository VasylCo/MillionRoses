import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
export const history = createBrowserHistory({ basename: baseUrl! });

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  rootElement
);

registerServiceWorker();
