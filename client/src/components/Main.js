import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

export default Main
