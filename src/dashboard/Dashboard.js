import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link} from "react-router-dom";

import * as dashboardActions from "./dashboardActions";
import * as loginActions from "../login/loginActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(dashboardActions.getUser());
  }

  render() {
    const {dashboard: {user}} = this.props;

    return (
      <div className="dashboard-page">
        <div>
          <Link to="/login" onClick={() => this.props.dispatch(loginActions.logout())}>Logout</Link>
        </div>
        hello, {user.firstName} {user.lastName}
      </div>
    );
  }
}

export default connect(({dashboard}) => ({dashboard}))(Dashboard);
