// @flow

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import reducers from './reducers'

const combinedReducers = {
  ...reducers,
  routing: routerReducer,
}

export default combineReducers(combinedReducers)
