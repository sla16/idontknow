import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getNearbyPlaces } from '../../reducers/places';

import Button from '../MaterialUI/Button';
import MenuItem from '../MaterialUI/MenuItem';
import SelectField from '../MaterialUI/SelectField';
import TextField from '../MaterialUI/TextField';
import './TopPanel.css';

const FOOD_TYPES = [
  'Bakery',
  'Bar',
  'Cafe',
  'Delivery Food',
  'Restaurant',
  'Takeaway Food'
]

class TopPanel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      keyword: '',
      location: {
        latitude: '42.3530892',
        longitude: '-71.0577941'
      },
      selectedType: null
    };

    this.onGetNearbyPlaces = this.onGetNearbyPlaces.bind(this);
    this.onKeywordChanged = this.onKeywordChanged.bind(this);
    this.onLatitudeChanged = this.onLatitudeChanged.bind(this);
    this.onLongitudeChanged = this.onLongitudeChanged.bind(this);
    this.onTypeChanged = this.onTypeChanged.bind(this);
  }

  onKeywordChanged = (key, keyword) => {
    this.setState({ keyword });
  }

  onLatitudeChanged = (key, latitude) => {
    this.setState({ location: { latitude } });
  }

  onLongitudeChanged = (key, longitude) => {
    this.setState({ location: { longitude } });
  }

  onTypeChanged = (event, index, selectedType) => {
    this.setState({ selectedType });
  }

  onGetNearbyPlaces = () => {
    this.props.getNearbyPlaces({
      keyword: this.state.keyword,
      location: this.state.location,
      type: this.state.selectedType.replace(' ', '_').toLowerCase()
    });
  }
  render () {
    const { selectedType, location: { latitude, longitude } } = this.state;
    const enabled = selectedType && latitude && longitude;

    return (
      <div className='TopPanel'>
        TODO: Options/Filters/Etc
        <div className='TopPanel__buttons-outer-container'>
          <div className='TopPanel__buttons-inner-container'>
            <TextField
              className='TopPanel__text-field'
              floatingLabelText='Keyword'
              floatingLabelFixed
              hintText='Keyword is optional'
              onChange={this.onKeywordChanged}
              value={this.state.keyword} />

            <SelectField
              className='TopPanel__select-field'
              hintText="Select type (required)"
              value={selectedType}
              onChange={this.onTypeChanged} >
              {
                FOOD_TYPES.map((type) => (
                  <MenuItem
                    key={type}
                    value={type}
                    primaryText={type} />
                ))
              }
            </SelectField>

            <TextField
              className='TopPanel__text-field'
              floatingLabelText='Latitude'
              floatingLabelFixed
              hintText='Latitude is required.'
              onChange={this.onLatitudeChanged}
              value={this.state.location.latitude} />

            <TextField
              className='TopPanel__text-field'
              floatingLabelText='Longitude'
              floatingLabelFixed
              hintText='Longitude is required.'
              onChange={this.onLongitudeChanged}
              value={this.state.location.longitude} />

            <Button
              disabled={!enabled}
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
