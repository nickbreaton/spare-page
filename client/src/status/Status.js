import React, { Component } from 'react'
import Center from './Center'
import styled from 'styled-components'
import SVG from 'svg.js'
import uuid from 'uuid/v4'

const Styles = styled.div`
  display: inline-block;
  width: 10em;
  height: 10em;
  svg {
    width: 100%;
    height: 100%;
  }
`

const SIZE = 24;

class Status extends Component {
  constructor() {
    super()
    this.state = {
      mask: uuid()
    }
  }
  componentWillReceiveProps(nextProps) {
    // animate top arrow when file is over drop area
    if (this.props.fileOver !== nextProps.fileOver || nextProps.loading) {
      const offset = (nextProps.fileOver && !nextProps.loading) ? -1 : 0
      SVG.adopt(this.refs.arrow).stop().animate(100).translate(0, offset)
    }

    // animate loading progress
    SVG.adopt(this.refs.color).stop().animate(250).attr({
      y: SIZE - (SIZE * (nextProps.upload / 100))
    })
  }
  render() {
    return (
      <Center>
        <Styles>
          <svg viewBox={`0 0 ${SIZE} ${SIZE}`}>
            <g mask={`url(#${this.state.mask})`}>
              <rect width={SIZE} height={SIZE} fill="#DDD"/>
              <rect ref="color" width={SIZE} y={SIZE} height={SIZE} fill="#CE93D8"/>
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
        </Styles>
      </Center>
    )
  }
}

export default Status
