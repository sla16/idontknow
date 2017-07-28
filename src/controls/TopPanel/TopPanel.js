import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getFoodLocations } from '../../reducers/FoodReducer'

import Button from '../MaterialUI/Button'
import './TopPanel.css';

class TopPanel extends Component {
  render () {
    return (
      <div className='TopPanel'>
        TODO: Options/Filters/Etc
        <div className='TopPanel__buttons-outer-container'>
          <div className='TopPanel__buttons-inner-container'>
            <Button
              labelMessage='Food me'
              onTouchTap={this.props.getFoodLocations}
              primary={true} />
            </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getFoodLocations }, dispatch)
}

export default connect(null, mapDispatchToProps)(TopPanel)
