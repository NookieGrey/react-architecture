import React, {Component} from 'react';
import {connect} from "react-redux";

import {Field, reduxForm} from 'redux-form';
import {Button, Form} from "antd";

import ReduxInput from "../widgets/reduxFormComponents/ReduxInput";

import * as loginActions from "./loginActions";

import "../core/simple-page.css"

const formItemLayout = {
  labelCol: {span: 4},
  wrapperCol: {span: 14},
};

class Login extends Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <div className="simple-page-page">
        <Form
          onSubmit={handleSubmit(() => this.props.dispatch(loginActions.login()))}
          className="simple-page"
        >
          <Field
            name="username"
            component={ReduxInput}
            label="Username"
            type="text"
            FormItemProps={formItemLayout}
          />
          <Field
            name="password"
            component={ReduxInput}
            label="Password"
            type="password"
            FormItemProps={formItemLayout}
          />
          <Button htmlType="submit" type="primary">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default connect()(reduxForm({form: 'login'})(Login));
