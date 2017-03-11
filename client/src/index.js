import { injectGlobal } from 'styled-components'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.querySelector('#app'))

injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
