import React, { Component } from 'react';
import MaterialList from 'material-ui/List';

export default class List extends Component {
  render () {
    const { className, ...rest } = this.props

    return (
      <MaterialList
        className={className}
        {...rest} />
    )
  }
}