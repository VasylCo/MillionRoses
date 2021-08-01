import 'bootstrap/dist/css/bootstrap.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history';
import './i18n';
import Loader from './components/Loader';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
export const history = createBrowserHistory({ basename: baseUrl! });

ReactDOM.render(
  <Router history={history}>
    <Suspense fallback={<Loader />}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Suspense>
  </Router>,
  rootElement
);

registerServiceWorker();
