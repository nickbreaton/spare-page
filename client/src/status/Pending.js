import { autorun, action, computed, observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import { withTheme } from 'styled-components'
import React, { Component } from 'react'
import SVG from 'svg.js'

@withTheme
@inject('file')
@inject('ui')
@observer
class Pending extends Component {
  componentDidMount() {
    autorun(() => this.animateSpin())
  }
  animateSpin() {

  }
  render() {
    return (
      <svg viewBox={'0 0 100 100'}>
        <g>

        </g>
      </svg>
    )
  }
}

export default Pending
