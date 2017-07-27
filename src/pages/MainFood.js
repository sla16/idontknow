import React, { Component } from 'react';

import LeftPanel from '../controls/LeftPanel/LeftPanel'
import TopPanel from '../controls/TopPanel/TopPanel'
import ContentPanel from '../controls/ContentPanel/ContentPanel'
import '../Main.css';

export default class MainFood extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <LeftPanel />
        <TopPanel />
        <ContentPanel />
      </div>
    )
  }
}