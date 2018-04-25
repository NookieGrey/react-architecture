import React, {Component} from 'react';

import {Input, Form} from "antd";

export default class ReduxInput extends Component {
  render() {
    const {
      meta: {touched, error,},
      input,
      type,
      label,
      FormItemProps,
      InputProps,
      className,
    } = this.props;

    return (
      <Form.Item
        validateStatus={(touched && error && "error") || null}
        help={touched && error}
        label={label}
        className={className}
        {...FormItemProps}
      >
        <Input
          size="default"
          {...input}
          type={type}
          {...InputProps}
        />
      </Form.Item>
    );
  }
};