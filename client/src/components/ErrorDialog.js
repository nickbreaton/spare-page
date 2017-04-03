import styled from 'styled-components'
import { connect, bindActionCreators } from 'react-redux'

const width = '17.5em';

const ErrorDialog = styled.div`
  background: white;
  border-radius: 0.5em;
  border: 0.15em solid;
  color: #E74C3C;
  font-size: 1.25em;
  left: calc(50% - ${width} / 2);
  opacity: ${props => props.active ? 1 : 0};
  padding: 1em;
  position: fixed;
  text-align: center;
  top: 8em;
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
    top: 1em;
    left: 0;
    margin: 0 2em;
  }
`

const mapStateToProps = (state) => (
  {
    active: state.errors.active,
    message: state.errors.lastMessage
  }
)

export default connect(mapStateToProps)(ErrorDialog)
