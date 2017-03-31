import styled from 'styled-components'

export default styled.div`
  display: flex;
  position: relative;
  width: 2.25em;
  height: 2.25em;
  align-items: center;
  justify-content: center;
  margin-right: 0.5em;

  & > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & > :first-child circle {
    stroke: white;
  }
`
