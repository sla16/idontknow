import React, { Component } from 'react';
import MaterialSelectField from 'material-ui/SelectField';

export default class SelectField extends Component {
  render () {
    const { className, ...rest } = this.props

    return (
      <MaterialSelectField
        className={className}
        {...rest} />
    )
  }
}