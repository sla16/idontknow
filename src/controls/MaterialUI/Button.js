import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Button extends Component {
  handleOnTouchTap = (event) => {
    this.props.onTouchTap({ location: 'Boston' })
  }

  render() {
    const { labelMessage, primary, ...rest } = this.props

    return (
      <RaisedButton
        label={labelMessage}
        onTouchTap={this.handleOnTouchTap}
        primary={primary}
        {...rest} />
    )
  }
}