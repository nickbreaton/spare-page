import React from 'react'
import Styles from './Styles'
import Card from './Card';
import Dropzone from './Dropzone'
import UploadIcon from '../../vender/ikons/cloud_upload.svg'

const App = () => (
  <Styles>
    <Card>
      <Dropzone>
        <UploadIcon/>
        Drag PDFs to convert
      </Dropzone>
      hello
    </Card>
  </Styles>
)

export default App
