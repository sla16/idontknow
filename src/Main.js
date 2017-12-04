import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LeftPanel from './controls/LeftPanel/LeftPanel';
import TopPanel from './controls/TopPanel/TopPanel';
import ContentPanel from './controls/ContentPanel/ContentPanel';

import './Main.css';

export default class Main extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      height: '100%'
    }
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  handleFoodClick = () => {
    this.setState({
      height: '0'
    }, () => {
      setTimeout(() => {
        setTimeout(() => {
          this.context.router.history.push('/food');
        }, 200)
      }, 2000)
    })
  };

  render () {
    return (
      <div className="Main__center" style={{height: `${this.state.height}`}}>
        <div>
          <LeftPanel />
          <TopPanel />
          <ContentPanel />
        </div>
      </div>
    )
  };
}
