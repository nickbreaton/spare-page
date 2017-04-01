import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import reducers from '../reducers'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Store = (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
)

export default Store
