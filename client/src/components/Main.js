import React from 'react'
import styled from 'styled-components'

const MainStyles = styled.main`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  min-height: 100vh;
  flex-basis: 100%;
  align-items: flex-start;
  margin: auto;
  max-width: calc(${props => props.theme.breakpoint} - 4em);
  width: 100%;
  padding-top: 2em;

  @media(max-width: ${props => props.theme.breakpoint}) {
    max-width: 100%;
    padding-top: 0em;
  }
`

// IE 11 flex-box min-heigt fixe
//  http://codepen.io/chriswrightdesign/pen/emQNGZ/
const Main = (props) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <MainStyles {...props}/>
  </div>
)

export default Main
