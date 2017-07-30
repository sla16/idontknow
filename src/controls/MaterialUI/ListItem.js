import React, { Component } from 'react';
import { ListItem as MaterialListItem} from 'material-ui/List';

export default class ListItem extends Component {
  render () {
    const { className, ...rest } = this.props

    return (
      <MaterialListItem
        className={className}
        {...rest} />
    )
  }
}