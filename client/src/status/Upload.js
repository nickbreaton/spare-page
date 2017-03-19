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
  static SIZE = 24
  @observable mask = uuid()
  componentDidMount() {
    autorun(() => {
      const active = (this.props.ui.fileOver && !this.props.file.inProgress)
      const direction = active ? -1 : 0
      SVG.adopt(this.refs.arrow).stop().animate(100).translate(0, direction)
    })
    autorun(() => {
      SVG.adopt(this.refs.color).stop().animate(250).attr({
        y: Upload.SIZE - (Upload.SIZE * (this.props.file.upload / 100))
      })
    })
  }
  render() {
    return (
      <svg viewBox={`0 0 ${Upload.SIZE} ${Upload.SIZE}`}>
        <g mask={`url(#${this.mask})`}>
          <rect width={Upload.SIZE} height={Upload.SIZE} fill="#DDD"/>
          <rect ref="color" width={Upload.SIZE} y={Upload.SIZE} height={Upload.SIZE} fill={this.props.theme.color}/>
        </g>
        <defs>
          <mask id={this.mask}>
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

export default Upload
