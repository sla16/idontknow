import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      r: 0,
      g: 255,
      b: 0
    }
  }

  changeColors = () => {
    this.setState ({
      r: Math.floor(Math.random() * 255) + 1,
      g: Math.floor(Math.random() * 255) + 1,
      b: Math.floor(Math.random() * 255) + 1
    });
  }

  render() {
    const { r, g, b } = this.state

    setTimeout(() => {
      this.changeColors()
    }, 500)

    return (
      <div className="container" style={{color: `rgb(${r},${g},${b})`}}>
        I am not dating food
      </div>
    );
  }
}

export default App;
