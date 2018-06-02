import React from 'react';

import ErrorSubmitForm from "./ErrorSubmitForm";

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
        <ErrorSubmitForm
          error={this.state.error}
          info={this.state.info}
          processError={this.processError}
        />
      );
    }

    return this.props.children;
  }
}