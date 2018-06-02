import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';
import PrivateLayout from "./PrivateLayout";
import {getComponentWithReducer} from "../utils/loading/lazyLoading";

const Dashboard = getComponentWithReducer({
  Component: () => import(/* webpackChunkName: "Dashboard" */ "../pages/dashboard/Dashboard"),
  reducer: () => import(/* webpackChunkName: "dashboardReducer" */ "../pages/dashboard/dashboardReducer"),
});

class PrivateRoutes extends React.Component {
  render() {
    const {url} = this.props.match;

    return (
      <PrivateLayout>
        <Switch>
          <Route
            exact
            path={`${url}/dashboard`}
            component={Dashboard}
          />
          <Redirect exact from={url} to={`${url}/dashboard`}/>
          <Redirect to="/404"/>
        </Switch>
      </PrivateLayout>
    );
  }
}

export default PrivateRoutes;