import styled from 'styled-components'

const Card = styled.div`
  background: white;
  border-radius: 0.5em;
  box-shadow: 0 0 1.25em -0.25em rgba(0, 0, 0, 34);
  display: flex;
  flex-direction: column;
  margin: 14vh auto;
  max-width: calc(${props => props.theme.breakpoint} - 4em);
  width: 100%;
  position: relative;

  & > div {
    border-radius: inherit;
  }

  @media(max-width: ${props => props.theme.breakpoint}) {
    max-width: 100%;
    box-shadow: none;
    margin: 2em 0;
  }
`

export default Card
