import React, { Component, PropTypes } from 'react'
import SpinnerIcon from './SpinnerIcon'
import SpinnerRing from './SpinnerRing'
import SpinnerWrapper from './SpinnerWrapper'
import SVG from 'svg.js'

class Spinner extends Component {
  static propTypes = {
    progress: PropTypes.number,
    complete: PropTypes.bool,
    pending: PropTypes.bool,
    uploading: PropTypes.bool
  }
  static defaultProps = {
    progress: 0
  }
  render() {
    return (
      <SpinnerWrapper>
        <SpinnerRing {...this.props} children={null}/>
        <SpinnerIcon {...this.props} children={null}/>
      </SpinnerWrapper>
    )
  }
}

export default Spinner
