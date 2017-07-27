import React, { Component } from 'react';

import './LeftPanel.css';

export default class LeftPanel extends Component {
  constructor (props, context) {
    super(props, context);
  }

  returnHome = () => {
    this.context.router.history.push('/');
  }

  render () {
    return (
      <div className='LeftPanel'>
        <div className='LeftPanel__logo'>
          <a href='#' onClick={this.returnHome}>
            TODO: Logo
          </a>
        </div>
        <div className='LeftPanel_list'>
          TODO: List of things, etc
        </div>
      </div>
    )
  }
}

LeftPanel.contextTypes = {
  router: React.PropTypes.func.isRequired
}
