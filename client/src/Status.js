import React, { Component } from 'react'
import styled from 'styled-components'

const Upload = styled.div`
  width: 12em;
  height: 12em;
  opacity: 0.15;
  transition: 0.25s linear;

  &::before,
  &::after {
    display: block;
    content: '';
    background: url(upload.svg);
    background-size: 100%;
    transition: 0.25s linear;
  }

  &::before {
    height: 70%;
    background-position: top;
  }

  &:hover::before {
    transform: translateY(-7.5%);
  }

  &::after {
    height: 30%;
    background-position: bottom;
  }

  &:hover {
    opacity: 0.1;
  }
`

const BottomUpload = styled(Upload)`
  flex-grow: 1;
  background-position: bottom;
`

class Status extends Component {
  render() {
    return (
      <Upload/>
    )
  }
}

export default Status
