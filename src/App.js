// 0099CC CCFFCC  66CCFF  003399 //
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './Main'
import MainFood from './pages/MainFood'
import NoMatch from './pages/NoMatch'

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div>
        <div className="content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/food" component={MainFood} />
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
