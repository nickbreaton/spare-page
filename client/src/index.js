import { injectGlobal } from 'styled-components'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App/>, document.querySelector('#app'))

injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
