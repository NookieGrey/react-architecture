import React from 'react';
import {connect} from "react-redux";

import {Field, reduxForm} from "redux-form";
import {Button, Form} from "antd";

import ReduxInput from "../../widgets/reduxFormComponents/ReduxInput";

import * as errorSubmitAction from "./errorSubmitActions";

import "../simple-page.css"

class ErrorSubmitForm extends React.Component {
  render() {
    const {handleSubmit, error, info, processError} = this.props;

    return (
      <div className="simple-page-page">
        <Form
          layout="vertical"
          onSubmit={handleSubmit(() => this.props.dispatch(errorSubmitAction.submitCrashReport(error, info, processError)))}
          className="simple-page"
        >
          <h2 className="public-page-title">
            500 ERROR - Something went wrong
          </h2>
          <p>
            Please write what happened?
          </p>
          <Field
            component={ReduxInput}
            type="text"
            name="subject"
            label="Subject"

          />
          <Button
            type="primary"
            htmlType="submit"
            size="large"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}


export default reduxForm({
  form: "errorSubmit"
})(connect()(ErrorSubmitForm));