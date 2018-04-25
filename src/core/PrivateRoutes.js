import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from "../dashboard/Dashboard";
import PrivateLayout from "./PrivateLayout";

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