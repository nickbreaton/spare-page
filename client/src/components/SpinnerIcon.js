import styled from 'styled-components'
import React from 'react'

const SpinnerIcon = (props) => {
  let Icon = ( <svg/> )

  // per icon styles

  if (props.complete) {
    Icon = styled(require('../../assets/icons/tick.svg'))`
      transform: scale(0.6);

      g {
        stroke-width: 2.5;
      }
    `
  }

  if (props.pending) {
    Icon = styled(require('../../assets/icons/pending.svg'))`
      transform: scale(0.5);
    `
  }

  if (props.uploading) {
    Icon = require('../../assets/icons/arrow.svg')
  }

  // common icon styles

  Icon = styled(Icon)`
    path, g {
      fill: white;
      stroke: white;

      @media(max-width: ${props => props.theme.breakpoint}) {
        fill: ${props => props.theme.colors.main};
        stroke: ${props => props.theme.colors.main};
      }
    }
  `

  return ( <Icon/> )
}

export default SpinnerIcon
