import { withTheme } from 'styled-components'
import React, { Component, PropTypes } from 'react'
import SVG from 'svg.js'
import uuid from 'uuid/v4'

class Upload extends Component {
  static size = 24
  static propTypes = {
    hover: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    status: PropTypes.number.isRequired
  }
  state = {
    mask: uuid()
  }
  componentWillReceiveProps(next) {
    // animate top arrow when file is over drop area
    if (this.props.hover !== next.hover || next.loading) {
      const offset = (next.hover && !next.loading) ? -1 : 0
      SVG.adopt(this.refs.arrow).stop().animate(100).translate(0, offset)
    }

    // animate loading progress
    SVG.adopt(this.refs.color).stop().animate(250).attr({
      y: Upload.size - (Upload.size * (next.status / 100))
    })
  }
  render() {
    return (
      <svg viewBox={`0 0 ${Upload.size} ${Upload.size}`}>
        <g mask={`url(#${this.state.mask})`}>
          <rect width={Upload.size} height={Upload.size} fill="#DDD"/>
          <rect ref="color" width={Upload.size} y={Upload.size} height={Upload.size} fill={this.props.theme.color}/>
        </g>
        <defs>
          <mask id={this.state.mask}>
            <g ref="arrow">
              <polygon fill="#FFF" points="9 16 15 16 15 10 19 10 12 3 5 10 9 10"/>
            </g>
            <polygon fill="#FFF" points="5 18 19 18 19 20 5 20"/>
          </mask>
        </defs>
      </svg>
    )
  }
}

export default withTheme(Upload)
