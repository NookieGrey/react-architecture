import React from 'react';

import {Redirect, Route, Switch} from "react-router-dom";

import Login from "../login/Login";
import Dashboard from "../dashboard/Dashboard";

const Routes = () => (
  <Switch>
    <Route
      exact
      path='/login'
      component={Login}
    />
    <Route
      exact
      path='/dashboard'
      component={Dashboard}
    />
    <Route
      exact
      path='/404'
      component={() => "404 page not found"}
    />
    <Redirect exact from='/' to='/login'/>
    <Redirect to="/404"/>
  </Switch>
);

export default Routes;