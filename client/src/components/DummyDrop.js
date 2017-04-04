import Dropzone from 'react-dropzone'
import React from 'react'

const DummyDrop = (props) => (
  <Dropzone
    style={{
      cursor: 'default',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0
    }}
    onDrop={() => null}
    disableClick
  />
)

export default DummyDrop
