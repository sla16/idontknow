import React, { Component } from 'react';
import MaterialTextField from 'material-ui/TextField';

export default class TextField extends Component {
  render () {
    const { className, ...rest } = this.props

    return (
      <MaterialTextField
        className={className}
        {...rest} />
    )
  }
}