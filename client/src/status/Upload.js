import { autorun, action, computed, observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import { withTheme } from 'styled-components'
import React, { Component, PropTypes } from 'react'
import SVG from 'svg.js'
import uuid from 'uuid/v4'

@inject('file')
@inject('ui')
@observer
@withTheme
class Upload extends Component {
  // SVG viewbox size
  static SIZE = 24
  // generate unique mask ID
  @observable mask = uuid()
  // setup autorun for animations
  componentDidMount() {
    autorun(() => this.animateArrow())
    autorun(() => this.animateProgress())
  }
  animateArrow() {
    // raise arrow when file over drop and nothing in progress
    const active = (this.props.ui.fileOver && !this.props.file.inProgress)
    const direction = active ? -1 : 0
    SVG.adopt(this.refs.arrow).stop().animate(100).translate(0, direction)
  }
  animateProgress() {
    // move rectangle with upload progress
    SVG.adopt(this.refs.color).stop().animate(250).attr({
      y: Upload.SIZE - (Upload.SIZE * (this.props.file.upload / 100))
    })
  }
  render() {
    return (
      <svg viewBox={`0 0 ${Upload.SIZE} ${Upload.SIZE}`}>
        <g mask={'url(#' + this.mask + ')'}>
          <rect
            fill="#DDD"
            width={Upload.SIZE}
            height={Upload.SIZE}
          />
          <rect
            ref="color"
            fill={this.props.theme.color}
            y={Upload.SIZE}
            width={Upload.SIZE}
            height={Upload.SIZE}
          />
        </g>
        <defs>
          <mask id={this.mask}>
            <g ref="arrow">
              <polygon
                fill="#FFF"
                points="9 16 15 16 15 10 19 10 12 3 5 10 9 10"
              />
            </g>
            <g>
              <polygon
                fill="#FFF"
                points="5 18 19 18 19 20 5 20"
              />
            </g>
          </mask>
        </defs>
      </svg>
    )
  }
}

export default Upload