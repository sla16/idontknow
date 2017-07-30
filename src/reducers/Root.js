import { combineReducers } from 'redux'
import places from './places'

const appReducer = combineReducers({
  places
})

function rootReducer (state, action) {
  return appReducer(state, action)
}

export default rootReducer