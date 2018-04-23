import React, {Component} from 'react';
import {connect} from "react-redux";
import { Field, reduxForm } from 'redux-form';

import * as loginActions from "./loginActions";

class Login extends Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(() => this.props.dispatch(loginActions.login()))}>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect()(reduxForm({form: 'login'})(Login));
