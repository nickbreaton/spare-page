import App from './components/App'
import React from 'react'
import ReactDOM from 'react-dom'
import localforage from 'localforage'

const mount = document.getElementById('app')
const app = React.createElement(App, null)

// render application
ReactDOM.render(app, mount)

// remove old files
localforage.clear()
