import React from 'react';

import {Redirect, Route, Switch} from "react-router-dom";

import {getSingleComponent} from "../utils/lazyLoading";

const Login = getSingleComponent(() => import(/* webpackChunkName: "Login" */ '../login/Login'));
const PrivateRoutes = getSingleComponent(() => import(/* webpackChunkName: "PrivateRoutes" */ './PrivateRoutes'));

const Routes = () => (
  <Switch>
    <Route
      exact
      path='/login'
      component={Login}
    />
    <Route
      path='/private'
      component={PrivateRoutes}
    />
    <Route
      exact
      path='/404'
      component={() => "404 page not found"}
    />
    <Redirect exact from='/' to='/private/dashboard'/>
    <Redirect to="/404"/>
  </Switch>
);

export default Routes;