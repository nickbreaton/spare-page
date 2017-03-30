import React, { Component, PropTypes } from 'react'
import SVG from 'svg.js'
import styled from 'styled-components'

class Spinner extends Component {
  static propTypes = {
    start: PropTypes.number,
    end: PropTypes.number
  }
  componentDidMount() {
    // caclulate dimentions
    this.stroke = 10
    this.diameter = 100 - (this.stroke * 2)
    this.circumference = this.diameter * Math.PI

    // hook into existing
    this.draw = SVG.adopt(this.refs.svg)

    // create cricle template
    this.background = this.draw.circle(this.diameter)

    // add shared styles
    this.background
      .fill('none')
      .move(this.stroke, this.stroke)
      .stroke({ color: 'white', width: this.stroke })

    // create a copy of generic circle
    this.progress = this.background.clone()

    // set background specific properties
    this.background
      .opacity(0.5)

    // set progress specific properties
    this.progress
      .attr('stroke-dasharray', this.circumference + ' ' + this.circumference)
      .attr('stroke-dashoffset', this.circumference)
      .attr('stroke-linecap', 'round')
      .rotate(-90)

    // tmp
    this.progress
      .animate(3500)
      .attr('stroke-dashoffset', 0)
  }
  render() {
    return (
      <Styles>
        <svg
          ref='svg'
          width='100'
          height='100'
          viewBox='0 0 100 100'
        />
        {this.props.children}
      </Styles>
    )
  }
}

const Styles = styled.div`
  display: flex;
  position: relative;
  width: 79px;
  height: 79px;
  align-items: center;
  justify-content: center;

  & > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default Spinner
