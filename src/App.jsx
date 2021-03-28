import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ApplicationsPage from './pages/ApplicationsPage/ApplicationsPage';
import SingleApplicationPage from './pages/SingleApplicationPage/SingleApplicationPage';

import CustomToastContainer from './components/CustomToastContainer/CustomToastContainer';

import styles from './App.module.scss';

import DocsPage from './pages/DocsPage/DocsPage';
import GuidePage from './pages/GuidePage/GuidePage';


function App() {
  return (
    <Router>
      <div>
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
          <Route path='/guide' component={GuidePage} />
        </Switch>
        <CustomToastContainer />
      </div>
    </Router>
  );
}

export default App;
