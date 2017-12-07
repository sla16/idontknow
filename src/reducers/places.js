import update from 'immutability-helper';

import {
  getNearbyPlaces as getNearbyPlacesAdapter,
  selectPlace as selectPlaceAdapter
} from '../adapters/places';

export function selectPlace (place) {
  return (dispatch) => {
    selectPlaceAdapter({
      callback: (response) => dispatch({ type: 'SET_SELECTED_PLACE', place: response }),
      place
    });
  };
}

export function getNearbyPlaces (data) {
  return (dispatch) => {
    getNearbyPlacesAdapter({
      callback: (response) => dispatch({ type: 'GET_NEARBY_PLACES', places: response }),
      keyword: data.keyword,
      location: data.location,
      type: data.type
    });
  };
}

export default function (state = { places: {}, selectedPlace: null }, action) {
  switch (action.type) {
  case 'GET_NEARBY_PLACES': {
    const newPlaces = {};

    action.places.forEach((place) => {
      newPlaces[place.id] = place;
    });
    return update(
      state,
      {
        places: { $set: newPlaces }
      }
    );
  }
  case 'SET_SELECTED_PLACE': {
    const { place } = action;

    return update(state, { selectedPlace: { $set: place } });
  }
  default:
    return state;
  }  
}
