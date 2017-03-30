import styled from 'styled-components'

const Dropzone = styled.div`
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

  & > svg {
    fill: ${props => props.theme.colors.main};
    margin-bottom: 1em;
  }
`

export default Dropzone
