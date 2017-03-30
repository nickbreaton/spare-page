import Arrow from '../../../assets/icons/arrow.svg'
import Pending from '../../../assets/icons/pending.svg'
import styled from 'styled-components'
import React from 'react'

export default (props) => {
  const Icon = () => {
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
    return null
  }

  const StyledIcon = styled(Icon())`
    g {
      fill: white;
    }
  `

  return <StyledIcon/>
}
