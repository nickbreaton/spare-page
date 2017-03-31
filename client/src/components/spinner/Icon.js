import Arrow from '../../../assets/icons/arrow.svg'
import Pending from '../../../assets/icons/pending.svg'
import Tick from '../../../assets/icons/tick.svg'
import styled from 'styled-components'
import React from 'react'

export default (props) => {
  const Icon = () => {
    if (props.complete) {
      return styled(Tick)`
        transform: scale(0.6);
      `
    }
    if (props.pending) {
      return styled(Pending)`
        transform: scale(0.5);
      `
    }
    if (props.downloading || props.uploading) {
      return styled(Arrow)`
        transform: rotate(${props.downloading ? 180 : 0}deg);
      `
    }
    return <div/>
  }

  const StyledIcon = styled(Icon())`
    g {
      fill: white;
    }
  `

  return <StyledIcon/>
}
