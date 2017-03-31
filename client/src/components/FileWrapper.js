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
`

export default FileWrapper
