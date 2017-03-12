import styled from 'styled-components'

const Progress = styled.div`
  display: inline-block;
  background: ${props => !props.loading ? '#ccc' : 'orange'};
  width: 4em;
  height: 4em;
  &::before {
    content: '${props => props.progress}'
  }
`

export default Progress
