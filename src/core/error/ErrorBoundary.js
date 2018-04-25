import React from 'react';

import {getSingleComponent} from "../../utils/lazyLoading";

const ErrorHandler = getSingleComponent(() => import(/* webpackChunkName: "ErrorSubmitForm" */ './ErrorSubmitForm'));

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: {},
    info: {},
  };

  processError = () => {
    this.setState({
      hasError: false,
      error: {},
      info: {},
    })
  };

  componentDidCatch(error = {}, info = {}) {
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorHandler
          error={this.state.error}
          info={this.state.info}
          processError={this.processError}
        />
      );
    }

    return this.props.children;
  }
}