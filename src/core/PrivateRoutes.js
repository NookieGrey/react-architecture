import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';
import PrivateLayout from "./PrivateLayout";
import {getComponentWithReducer} from "../utils/lazyLoading";

class PrivateRoutes extends React.Component {
  render() {
    const {url} = this.props.match;

    return (
      <PrivateLayout>
        <Switch>
          <Route
            exact
            path={`${url}/dashboard`}
            component={getComponentWithReducer({
              Component: () => import(/* webpackChunkName: "Dashboard" */ "../dashboard/Dashboard"),
              reducer: () => import(/* webpackChunkName: "dashboardReducer" */ "../dashboard/dashboardReducer"),
            })}
          />
          <Redirect exact from={url} to={`${url}/dashboard`}/>
          <Redirect to="/404"/>
        </Switch>
      </PrivateLayout>
    );
  }
}

export default PrivateRoutes;