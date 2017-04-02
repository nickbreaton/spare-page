import styled from 'styled-components'
import React from 'react'

const FileButton = (props) => {
  let Button = ( <svg/> )

  // per button styles

  if (props.close) {
    Button = styled(require('../../assets/icons/close.svg'))`
      transform: scale(0.65);

      g {
        stroke-width: 5;
      }
    `
  }

  if (props.download) {
    Button = styled(require('../../assets/icons/arrow.svg'))`
      transform: rotate(180deg) scale(0.5);

      g {
        stroke: none;
      }
    `
  }

  // common button styles

  const Wrapper = styled.div`
    display: flex;
    background: white;
    border-radius: 1em;
    cursor: pointer;
    height: 1.25em;
    justify-content: center;
    margin-right: 0.35em;
    opacity: 0.5;
    width: 1.25em;

    &:hover {
      opacity: 1;
    }

    svg {
      height: 100%;
      width: 100%;

      g {
        fill: ${props => props.theme.colors.main};
        stroke: ${props => props.theme.colors.main};

        @media(max-width: ${props => props.theme.breakpoint}) {
          fill: white;
          stroke: white;
        }
      }
    }

    @media(max-width: ${props => props.theme.breakpoint}) {
      background: ${props => props.theme.colors.main};

      &:hover {
        opacity: 0.5;
      }
    }
  `

  return (
    <Wrapper onClick={props.onClick}>
      <Button/>
    </Wrapper>
  )
}

export default FileButton
