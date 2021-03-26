import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';

import Navigation from './components/Navigation/Navigation';
import ApplicationsPage from './pages/ApplicationsPage/ApplicationsPage';
import SingleApplicationPage from './pages/SingleApplicationPage/SingleApplicationPage';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navigation />
      </div>
      <div className={styles.container}>
        <Switch>
          <Route exact path='/applications'>
            <ApplicationsPage />
          </Route>
          <Route exact path='/applications/:appId'>
            <SingleApplicationPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
