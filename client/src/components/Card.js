import styled from 'styled-components'

const Card = styled.div`
  background: white;
  border-radius: 0.5em;
  box-shadow: 0 0 1.25em -0.25em rgba(0, 0, 0, 34);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  & > div {
    border-radius: inherit;
  }

  @media(max-width: ${props => props.theme.breakpoint}) {
    box-shadow: none;
  }
`

export default Card
