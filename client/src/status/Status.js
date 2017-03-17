import React, { Component } from 'react'
import Center from './Center'
import styled from 'styled-components'
import SVG from 'svg.js'

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
  componentWillReceiveProps(nextProps) {
    // change in props or loading
    if (this.props.fileOver !== nextProps.fileOver || nextProps.loading) {
      // offset if file over and not loading
      const offset = (nextProps.fileOver && !nextProps.loading) ? -1 : 0
      SVG.adopt(this.refs.arrow).stop().animate(250).translate(0, offset)
    }

    // change in loading state
    if (this.props.loading !== nextProps.loading) {
      SVG.adopt(this.refs.color).stop().animate(500).attr({ y: 0 })
    }
  }
  render() {
    return (
      <Center>
        <Styles>
          <svg viewBox={`0 0 ${SIZE} ${SIZE}`}>
            <mask id="clip">
              <g ref="arrow">
                <polygon fill="#FFF" points="9 16 15 16 15 10 19 10 12 3 5 10 9 10"/>
              </g>
              <g>
                <polygon fill="#FFF" points="5 18 19 18 19 20 5 20"/>
              </g>
            </mask>
            <g mask="url(#clip)">
              <rect width={SIZE} height={SIZE} fill="#DDD"/>
              <rect ref="color" width={SIZE} y={SIZE} height={SIZE} fill="#CE93D8"/>
            </g>
          </svg>
        </Styles>
      </Center>
    )
  }
}

export default Status
