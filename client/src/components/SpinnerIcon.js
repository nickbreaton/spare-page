import styled from 'styled-components'
import React from 'react'

const SpinnerIcon = (props) => {
  let Icon = ( <svg/> )

  // per icon styles

  if (props.complete) {
    Icon = styled(require('../../assets/icons/tick.svg'))`
      transform: scale(0.6);
    `
  }

  if (props.pending) {
    Icon = styled(require('../../assets/icons/pending.svg'))`
      transform: scale(0.5);
    `
  }

  if (props.downloading || props.uploading) {
    Icon = styled(require('../../assets/icons/arrow.svg'))`
      transform: rotate(${props.downloading ? 180 : 0}deg);
    `
  }

  // common icon styles

  Icon = styled(Icon)`
    path, g {
      fill: white;
    }
  `

  return ( <Icon/> )
}

export default SpinnerIcon
