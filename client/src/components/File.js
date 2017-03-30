import React, { Component } from 'react'
import styled from 'styled-components'
import Spinner from './spinner/Spinner'

class File extends Component {
  render() {
    return (
      <Styles>
        <Spinner {...this.props}/>
        <span>
          {this.props.name}
        </span>
      </Styles>
    )
  }
}

const Styles = styled.div`
  background: ${props => props.theme.colors.main};
  font-size: 1.5em;
  color: white;
  display: flex;
  align-items: center;
  margin-top: 0.1em;
`

export default File
