import {
  getFoodLocations as getFoodLocationsAdapter
} from '../adapters/FoodAdapter'

export function getFoodLocations (location) {
  return (dispatch, getState) => {
    getFoodLocationsAdapter(location)
      .then((response) => {
        debugger;
        console.log(response);
        dispatch({ type: 'GET_FOOD' });
      })
  }
}

export default function (state = [], action) {
  console.log('reducing')

  switch (action.type) {
    case 'ADD_FOOD_LOCATION':
      return [
        ...state,
        { completed: true }
      ]
    default:
      return state
  }  
}
