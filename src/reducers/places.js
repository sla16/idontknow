import update from 'immutability-helper'

import {
  getNearbyPlaces as getNearbyPlacesAdapter
} from '../adapters/FoodAdapter'

export function getNearbyPlaces (location) {
  return (dispatch, getState) => {
    getNearbyPlacesAdapter({
      callback: (response) => {
        dispatch({ type: 'GET_NEARBY_PLACES', places: response });
      },
      location
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
