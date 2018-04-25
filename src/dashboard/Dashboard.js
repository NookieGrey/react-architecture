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
        hello, {user.firstName} {user.lastName}
      </div>
    );
  }
}

export default connect(({dashboard}) => ({dashboard}))(Dashboard);
