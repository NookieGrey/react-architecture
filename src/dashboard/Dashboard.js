import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as dashboardActions from "./dashboardActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(dashboardActions.getUser());
  }

  render() {
    const {dashboard: {user}} = this.props;

    return (
      <div>
        <div>
          hello, {user.email}
        </div>
        <div>
          last login time {user.lastLoginAt && new Date(+user.lastLoginAt).toString()}
        </div>
      </div>
    );
  }
}

export default connect(({dashboard}) => ({dashboard}))(Dashboard);
