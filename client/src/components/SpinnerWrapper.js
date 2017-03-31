import styled from 'styled-components'

const SpinnerWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 2.25em;
  justify-content: center;
  margin-right: 0.5em;
  position: relative;
  width: 2.25em;

  & > :first-child {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  & > :first-child circle {
    stroke: white;
  }
`

export default SpinnerWrapper
