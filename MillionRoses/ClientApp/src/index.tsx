import 'bootstrap/dist/css/bootstrap.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history';
import './i18n';
import Loader from './components/Loader';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
export const history = createBrowserHistory({ basename: baseUrl! });

ReactDOM.render(
  <Router history={history}>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </Router>,
  rootElement
);

registerServiceWorker();
