import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getNearbyPlaces } from '../../reducers/places'

import Button from '../MaterialUI/Button'
import TextField from '../MaterialUI/TextField'
import './TopPanel.css';

class TopPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: {
        latitude: '42.3530892',
        longitude: '-71.0577941'
      }
    }
  }

  onLatitudeChanged = (key, latitude) => {
    this.setState({ location: { latitude } })
  }

  onLongitudeChanged = (key, longitude) => {
    this.setState({ location: { longitude } })
  }

  onGetNearbyPlaces = () => {
    this.props.getNearbyPlaces(this.state.location)
  }

  render () {
    return (
      <div className='TopPanel'>
        TODO: Options/Filters/Etc
        <div className='TopPanel__buttons-outer-container'>
          <div className='TopPanel__buttons-inner-container'>
            <TextField
              className='TopPanel__text-field'
              floatingLabelText='Latitude'
              floatingLabelFixed
              onChange={this.onLatitudeChanged}
              value={this.state.location.latitude} />
            <TextField
              className='TopPanel__text-field'
              floatingLabelText='Longitude'
              floatingLabelFixed
              onChange={this.onLongitudeChanged}
              value={this.state.location.longitude} />
            <Button
              labelMessage='Nearby places'
              onTouchTap={this.onGetNearbyPlaces}
              primary={true} />
            </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getNearbyPlaces }, dispatch)
}

export default connect(null, mapDispatchToProps)(TopPanel)
