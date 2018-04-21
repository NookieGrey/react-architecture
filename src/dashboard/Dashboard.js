import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as dashboardActions from "./dashboardActions";

class Dashboard extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(dashboardActions.getUser({
          firstName: 'Harper',
          lastName: 'Perez'
        }
      ))
    }, 3000)
  }


  render() {
    const {dashboard: {user}} = this.props;

    return (
      <div className="dashboard-page">
        hello, {user.firstName} {user.lastName}
      </div>
    );
  }
}

export default connect(({dashboard}) => ({dashboard}))(Dashboard);
