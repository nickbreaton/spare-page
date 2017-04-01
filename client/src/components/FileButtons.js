import styled from 'styled-components'

const FileButtons = styled.a`
  align-items: baseline;
  display: flex;

  svg {
    align-items: center;
    background: white;
    border-radius: 1em;
    cursor: pointer;
    height: 1.25em;
    justify-content: center;
    margin-right: 0.35em;
    opacity: 0.5;
    transform: scale(0.85);
    width: 1.25em;

    &:first-child {
      visibility: ${props => props.complete ? 'visible' : 'hidden'};
    }

    &:hover {
      opacity: 0.75;
    }

    @media(max-width: ${props => props.theme.breakpoint}) {
      background: ${props => props.theme.colors.main};
    }
  }

  g {
    fill: ${props => props.theme.colors.main};

    @media(max-width: ${props => props.theme.breakpoint}) {
      fill: white;
    }
  }
`

export default FileButtons
