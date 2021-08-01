import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import Documents from './components/Documents';
import Resources from './components/Resources';
import Share from './components/Share';

import './custom.css';

export const App = () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/counter' component={Counter} />
      <Route path='/documents' component={Documents} />
      <Route path='/resources' component={Resources} />
      <Route path='/share' component={Share} />
    </Layout>
  );
};
