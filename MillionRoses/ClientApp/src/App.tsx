import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Documents from './components/Documents';
import Resources from './components/Resources';
import Share from './components/Share';

import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/documents' component={Documents} />
        <Route path='/resources' component={Resources} />
        <Route path='/share' component={Share} />
      </Layout>
    );
  }
}
