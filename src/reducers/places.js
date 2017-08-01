import update from 'immutability-helper'

import {
  getNearbyPlaces as getNearbyPlacesAdapter
} from '../adapters/places'

export function getNearbyPlaces (data) {
  return (dispatch, getState) => {
    getNearbyPlacesAdapter({
      callback: (response) => {
        dispatch({ type: 'GET_NEARBY_PLACES', places: response });
      },
      keyword: data.keyword,
      location: data.location,
      type: data.type
    })
  }
}

export default function (state = { places: {} }, action) {
  switch (action.type) {
    case 'GET_NEARBY_PLACES':
      const newPlaces = {}

      action.places.forEach((place) => {
        newPlaces[place.id] = place
      })
      return update(
        state,
        {
          places: { $set: newPlaces }
        }
      )
    default:
      return state
  }  
}
