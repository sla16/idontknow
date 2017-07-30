import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import List from '../MaterialUI/List'
import ListItem from '../MaterialUI/ListItem'
import './LeftPanel.css';

class LeftPanel extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  returnHome = () => {
    this.context.router.history.push('/');
  };

  render () {
    const { places } = this.props.places

    return (
      <div className='LeftPanel'>
        <div className='LeftPanel__logo'>
          <a href='#' onClick={this.returnHome}>
            TODO: Logo
          </a>
        </div>
        <div className='LeftPanel_list'>
          <List>
            {
              Object.keys(places).map((placeId) => {
                return (
                  <ListItem
                    key={placeId}
                    leftAvatar={
                      <img src={places[placeId].icon} alt='restaurant icon' width='32' height='32' />
                    }
                    primaryText={places[placeId].name} />)
              })
            }
          </List>
        </div>
      </div>
    )
  };
}

function mapStateToProps ({ places }) {
  return { places }
}

export default connect(mapStateToProps)(LeftPanel)
