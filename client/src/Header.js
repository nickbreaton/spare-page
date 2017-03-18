import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 5em;
  background: ${props => props.theme.color};
  align-items: center;
  justify-content: center;
`

export default Header
