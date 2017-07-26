import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LeftPanel from './controls/LeftPanel/LeftPanel'
import Main from './Main'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div>
        <LeftPanel />
        <div className="content">
          <Router>
            <Route exact path="/" component={Main} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
