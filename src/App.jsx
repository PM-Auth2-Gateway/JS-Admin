import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import AppsList from './components/AppList/AppList';
import AppInfo from './components/AppInfo/AppInfo';
import SocialInfo from './components/SocialInfo/SocialInfo';

import styles from './App.module.scss';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Link to='/'>Header</Link>
      </div>
      <div className={styles.container}>
        <Switch>
          <Route exact path='/applications'>
            <AppsList />
          </Route>
          <Route exact path='/applications/:appId'>
            <AppInfo />
          </Route>
          <Route path='/applications/:appId/social/:socialId'>
            <SocialInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
