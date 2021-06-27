import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Routes;
