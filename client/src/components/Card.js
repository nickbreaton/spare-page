import styled from 'styled-components'

const Card = styled.div`
  background: white;
  border-radius: 0.5em;
  box-shadow: 0 0 1.25em -0.25em rgba(0, 0, 0, 34);
  display: flex;
  flex-direction: column;
  margin: 14vh auto;
  max-width: 30em;
  width: 100%;
  position: relative;

  & > div {
    border-radius: inherit;
  }
`

export default Card
