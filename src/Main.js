import React, { Component } from 'react';

import './Main.css';

export default class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      randomColors: {
        r: 0,
        g: 0,
        b: 0
      },
      height: '100%',
      showButton: true
    }
  }

  changeColors = () => {
    this.setState ({
      randomColors: {
        r: Math.floor(Math.random() * 255) + 1,
        g: Math.floor(Math.random() * 255) + 1,
        b: Math.floor(Math.random() * 255) + 1
      }
    });
  }

  handleFoodClick = () => {
    this.setState({
      height: '10%'
    }, () => {
      setTimeout(() => {
        setTimeout(() => {
          this.changeColors()
        }, 200)

        this.setState({ showButton: false })
      }, 2000)
    })
  }

  render () {
    const { showButton, randomColors: { r, g, b } } = this.state

    return (
      <div className="Main__center" style={{height: `${this.state.height}`}}>
        {
          this.state.showButton &&
          (<div className="Main__button-container">
            <input
              className="Main__button"
              type="button"
              value="Idk, food"
              onClick={this.handleFoodClick} />
          </div>)
        }
        {
          !this.state.showButton &&
          (<div className="Main__spinner-container" style={{color: `rgb(${r},${g},${b})`}}>
            <p className="Main__spinner">I am not dating food</p>
          </div>)
        }
      </div>
    )
  }
}