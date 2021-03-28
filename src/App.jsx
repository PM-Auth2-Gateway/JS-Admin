import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';

import Navigation from './components/Navigation/Navigation';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ApplicationsPage from './pages/ApplicationsPage/ApplicationsPage';
import SingleApplicationPage from './pages/SingleApplicationPage/SingleApplicationPage';
import DocsPage from './pages/DocsPage/DocsPage';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navigation />
      </div>
      <div className={styles.container}>
        <Switch>
          <PrivateRoute
            exact
            path='/applications/:appId'
            component={SingleApplicationPage}
          />
          <PrivateRoute
            exact
            path='/applications'
            component={ApplicationsPage}
          />
          <Route path='/docs' component={DocsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
