import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
