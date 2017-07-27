import React, { Component } from 'react';

import './Main.css';

export default class Main extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      height: '100%'
    }
  }

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
  }

  render () {
    return (
      <div className="Main__center" style={{height: `${this.state.height}`}}>
        <div className="Main__button-container">
          <input
            className="Main__button"
            type="button"
            value="Idk, food"
            onClick={this.handleFoodClick} />
        </div>
      </div>
    )
  }
}

Main.contextTypes = {
  router: React.PropTypes.func.isRequired
}
