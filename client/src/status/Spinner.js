import { withTheme } from 'styled-components'
import React, { Component, PropTypes } from 'react'
import SVG from 'svg.js'

class Spinner extends Component {
  static size = 100
  static duration = 2500
  componentDidMount() {
    const attr = { r: 50, opacity: 0 }
    SVG.adopt(this.refs.one)
      .animate(Spinner.duration)
      .attr(attr)
      .loop()
    SVG.adopt(this.refs.two)
      .delay(Spinner.duration / 2)
      .animate(Spinner.duration)
      .attr(attr)
      .loop()
  }
  render() {
    return (
      <svg viewBox={`0 0 ${Spinner.size} ${Spinner.size}`}>
        <circle
          ref="one"
          fill="none"
          stroke={this.props.theme.color}
          strokeWidth={5}
          cx={50} cy={50} r={0}
        />
        <circle
          ref="two"
          fill="none"
          stroke={this.props.theme.color}
          strokeWidth={5}
          cx={50} cy={50} r={0}
        />
      </svg>
    )
  }
}

export default withTheme(Spinner)
