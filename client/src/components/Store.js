import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import reducers from '../state'
import thunk from 'redux-thunk'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window
      && window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()
      || applyMiddleware()
  )
)

const Store = (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
)

export default Store
