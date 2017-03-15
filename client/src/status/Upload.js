import styled from 'styled-components'

const Upload = styled.div`
  width: 12em;
  height: 12em;
  opacity: 0.15;
  transition: 0.15s linear;

  &::before,
  &::after {
    display: block;
    content: '';
    background: url(upload.svg);
    background-size: 100%;
    transition: 0.15s linear;
  }

  &::before {
    height: 70%;
    background-position: top;
  }

  &::after {
    height: 30%;
    background-position: bottom;
  }

  &.active {
    opacity: 0.1;
  }

  &.active::before {
    transform: translateY(-7.5%);
  }
`

export default Upload
