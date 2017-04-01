import styled from 'styled-components'

const FileWrapper = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.main};
  color: white;
  cursor: default;
  display: flex;
  font-size: 1.5em;
  margin-top: 0.1em;
  padding: 0.5em;

  &:last-child {
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  @media(max-width: ${props => props.theme.breakpoint}) {
    font-size: 1.25em;
    background: none;
    color: ${props => props.theme.colors.main};
    padding-left: 1em;
  }
`

export default FileWrapper
