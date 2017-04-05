import React from 'react'
import styled from 'styled-components'

let Header = (props) => (
  <header {...props}>
    <h1>
      {'Spare Page'}
    </h1>
    <h2>
      {'Print single-sided on a double-sided printer by injecting blank pages.'}
    </h2>
  </header>
)

Header = styled(Header)`
  text-align: center;
  padding-top: 2em;
  padding-bottom: 3em;
  width: 100%;

  h1 {
    color: ${props => props.theme.colors.main};
    margin-bottom: 0.5em;
  }

  h2 {
    color: white;
    font-weight: normal;
    font-size: 1.35em;
    margin: auto 0.5em;
  }

  @media(max-width: ${props => props.theme.breakpoint}) {
    padding-bottom: 2em;

    h1 {
      color: ${props => props.theme.colors.main};
    }

    h2 {
      color: ${props => props.theme.colors.accent};
      font-size: 1.25em;
    }
  }
`

export default Header
