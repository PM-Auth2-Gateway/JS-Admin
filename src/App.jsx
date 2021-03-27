import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppsList from './components/AppList/AppList';
import AppInfo from './components/AppInfo/AppInfo';
import SocialInfo from './components/SocialInfo/SocialInfo';
import Navigation from './components/Navigation/Navigation';

import styles from './App.module.scss';
import LocalStorageService from './services/LocalStorageService';
import axios from 'axios';

function App() {
  const refresh = async () => {
    const { data } = await axios.post(
      'https://net-api-hbyuu.ondigitalocean.app/Admin/refreshToken',
      {},
      {
        withCredentials: true,
        headers: {
          token: LocalStorageService.getToken(),
        },
      }
    );
    LocalStorageService.setToken(data.token);
  };
  return (
    <Router>
      <div className={styles.App}>
        <Navigation />
      </div>
      <div className={styles.container}>
        <button onClick={refresh}>refresh</button>
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
