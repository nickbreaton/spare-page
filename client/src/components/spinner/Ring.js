import React, { Component } from 'react'
import SVG from 'svg.js'

class Ring extends Component {
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
      .stroke({ width: this.stroke })

    // create a copy of generic circle
    this.progress = this.background.clone()

    // set background specific properties
    this.background
      .opacity(0.5)

    // set progress specific properties
    this.progress
      .attr('stroke-dasharray', this.circumference + ' ' + this.circumference)
      .attr('stroke-dashoffset', this.getPercentage())
      .attr('stroke-linecap', 'round')
      .rotate(-90)
  }
  componentDidUpdate() {
    // animate progress on change
    this.progress
      .stop()
      .animate(500)
      .attr('stroke-dashoffset', this.getPercentage())
  }
  getPercentage() {
    return ((100 - this.props.progress) / 100 * this.circumference)
  }
  render() {
    return (
      <svg
        ref='svg'
        width='100'
        height='100'
        viewBox='0 0 100 100'
      />
    )
  }
}

export default Ring
