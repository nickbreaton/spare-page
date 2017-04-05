import React from 'react'
import styled from 'styled-components'
import { repository } from '../../../package.json'

let Footer = (props) => (
  <footer {...props}>
    <a href={repository.url} target="_blank">
      {'Fork on GitHub'}
    </a>
  </footer>
)

Footer = styled(Footer)`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  padding-top: 5em;


  a {
    padding: 1em;
    z-index: 1;
    text-decoration: none;
    color: ${props => props.theme.colors.main};
  }

  a:hover {
    text-decoration: underline;
  }

  @media(max-width: ${props => props.theme.breakpoint}) {
    padding-top: 2em;
    opacity: 0.5;

    a {
      text-decoration: none !important;
    }
  }
`

export default Footer
