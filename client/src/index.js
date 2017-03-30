import App from './components/App'
import React from 'react'
import ReactDOM from 'react-dom'

const mount = document.getElementById('app')
const app = React.createElement(App, null)

ReactDOM.render(app, mount)
