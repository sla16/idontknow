// 0099CC CCFFCC  66CCFF  003399 109ea15327f6c4fb86908330f2c13c32 //
// AIzaSyDpn22UdohBQhfbn_lCY844X7um2TgpoEw
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './Main';
import MainFood from './pages/MainFood';
import NoMatch from './pages/NoMatch';

import rootReducer from './reducers/Root';
import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
);

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
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
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
