import styled from 'styled-components'

const Drop = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.accent};
  border-radius: inherit;
  border: dashed 0.25em currentColor;
  color: ${props => props.theme.colors.main};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 1.25em;
  font-weight: bold;
  height: 12em;
  justify-content: center;
  margin: 2em;
  width: calc(100% - 4em);
  opacity: ${props => props.error || props.active ? 0.5 : 1};
  position: relative;

  &::after {
    content: '${props => props.desktopDirections}'
  }

  svg {
    fill: ${props => props.theme.colors.main};
    margin-bottom: 1em;
  }

  @media(max-width: ${props => props.theme.breakpoint}) {
    border: none;
    color: white;
    margin: 1em;
    margin-top: 0;
    width: calc(100% - 2em);
    height: auto;
    padding: 1em 0.25em;
    text-align: center;
    background-color: ${props => props.theme.colors.main};

    &::after {
      content: '${props => props.mobileDirections}'
    }

    svg {
      display: none;
    }
  }
`

export default Drop
