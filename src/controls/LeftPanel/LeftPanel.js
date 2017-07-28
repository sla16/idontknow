import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './LeftPanel.css';

export default class LeftPanel extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  returnHome = () => {
    this.context.router.history.push('/');
  };

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
  };
}
