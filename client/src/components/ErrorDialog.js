import styled from 'styled-components'
import { connect, bindActionCreators } from 'react-redux'

const width = '17.5em';

const ErrorDialog = styled.div`
  align-items: center;
  background: white;
  border-radius: 0.5em;
  border: 0.15em solid;
  color: #E74C3C;
  display: flex;
  font-size: 1.25em;
  justify-content: center;
  left: calc(50% - ${width} / 2);
  opacity: ${props => props.active ? 1 : 0};
  padding: 1em;
  position: absolute;
  text-align: center;
  top: 5.5em;
  transform: ${props => props.active ? 'scale(1)' : 'scale(0)'};
  transition: opacity 250ms ease-in-out,
              transform 250ms ease-in-out;
  width: ${width};
  z-index: 1000;

  &::after {
    content: '${props => props.message}';
  }

  @media(max-width: ${props => props.theme.breakpoint}) {
    width: calc(100% - 4em);
    top: -0.5em;
    left: 0;
    margin: 0 2em;
    min-height: 4em;
  }
`

const mapStateToProps = (state) => (
  {
    active: state.errors.active,
    message: state.errors.lastMessage
  }
)

export default connect(mapStateToProps)(ErrorDialog)
