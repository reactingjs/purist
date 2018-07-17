// @flow

import { createStore, applyMiddleware, compose } from 'redux'
import { router } from 'react-router-redux'
import middleware from 'middleware'
import reducers from 'reducers'

const dummyDevTools = (f) => f

const validDevTools = window.devToolsExtension ? window.devToolsExtension() : dummyDevTools

const getReduxDevTools = () => (process.env.NODE_ENV === 'development' ? validDevTools : dummyDevTools)

const enhancer = compose(applyMiddleware(...middleware), getReduxDevTools())

const configureStore = () => {
  const store = createStore(reducers, enhancer)

  return store
}
export default configureStore()
