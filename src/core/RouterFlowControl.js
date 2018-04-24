import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from "react-router-dom";

class RouterFlowControl extends React.Component {
  render() {
    const {
      login: {token},
      history: {
        location: {
          pathname
        }
      },
    } = this.props;

    if (/^\/private/.test(pathname) && (!token)) {
      return <Redirect to="/login"/>
    }

    return this.props.children;
  }
}

const RouterFlowControlConnected = connect(({login}) => ({login}))(RouterFlowControl);

const RouterFlowControlRoute = (props) =>
  <Route path="/" render={(routerProps) => <RouterFlowControlConnected {...props} {...routerProps}/>}/>
;

export default RouterFlowControlRoute;