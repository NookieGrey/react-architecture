import React from 'react';

import {Redirect, Route, Switch} from "react-router-dom";

import {getSingleComponent} from "../utils/lazyLoading";

const Routes = () => (
  <Switch>
    <Route
      exact
      path='/login'
      component={getSingleComponent(() => import(/* webpackChunkName: "Login" */ '../login/Login'))}
    />
    <Route
      path='/private'
      component={getSingleComponent(() => import(/* webpackChunkName: "PrivateRoutes" */ './PrivateRoutes'))}
    />
    <Route
      exact
      path='/404'
      component={() => "404 page not found"}
    />
    <Route
      exact
      path='/error'
      component={{}}
    />
    <Redirect exact from='/' to='/private/dashboard'/>
    <Redirect to="/404"/>
  </Switch>
);

export default Routes;