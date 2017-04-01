import styled from 'styled-components'

const size = '2.25em'

const SpinnerWrapper = styled.div`
  align-items: center;
  display: flex;
  height: ${size};
  justify-content: center;
  margin-right: 0.5em;
  position: relative;

  svg {
    width: ${size};
  }

  & > :first-child {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  & > :first-child circle {
    stroke: white;

    @media(max-width: ${props => props.theme.breakpoint}) {
      stroke: ${props => props.theme.colors.main};
    }
  }

  @media(max-width: ${props => props.theme.breakpoint}) {
    background: none;
    color: ${props => props.theme.colors.main}
  }
`

export default SpinnerWrapper
