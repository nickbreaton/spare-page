import Icon from './Icon'
import React, { Component, PropTypes } from 'react'
import Ring from './Ring'
import Styles from './Styles'
import SVG from 'svg.js'

class Spinner extends Component {
  static propTypes = {
    progress: PropTypes.number
  }
  render() {
    return (
      <Styles>
        <Ring {...this.props} children={null}/>
        <Icon {...this.props} children={null}/>
      </Styles>
    )
  }
}

export default Spinner
