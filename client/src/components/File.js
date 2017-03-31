import React, { Component } from 'react'
import styled from 'styled-components'
import Spinner from './spinner/Spinner'
import CloseIcon from '../../assets/icons/close.svg'
import DownloadIcon from '../../assets/icons/arrow_down.svg'

class File extends Component {
  render() {
    return (
      <Styles>
        <Spinner {...this.props}/>
        <Text>
          {this.props.name}
        </Text>
        <Buttons complete={this.props.complete}>
          <DownloadIcon/>
          <CloseIcon/>
        </Buttons>
      </Styles>
    )
  }
}

const Text = styled.span`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 0.75em;
`

const Styles = styled.div`
  background: ${props => props.theme.colors.main};
  font-size: 1.5em;
  color: white;
  display: flex;
  align-items: center;
  margin-top: 0.1em;
  cursor: default;
  padding: 0.5em;
`

const Buttons = styled.a`
  display: flex;
  align-items: baseline;

  svg {
    width: 1.25em;
    height: 1.25em;
    background: white;
    opacity: 0.5;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
    margin-right: 0.35em;
    transform: scale(0.85);
    cursor: pointer;

    &:first-child {
      visibility: ${props => props.complete ? 'visible' : 'hidden'};
    }

    &:hover {
      opacity: 0.75;
    }
  }

  g {
    fill: ${props => props.theme.colors.main};
  }
`

export default File
