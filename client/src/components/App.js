import React from 'react'
import Styles from './Styles'
import Card from './Card';
import Dropzone from './Dropzone'
import FileManager from './FileManager'
import UploadIcon from '../../assets/icons/cloud_upload.svg'

const App = () => (
  <Styles>
    <Card>
      <Dropzone>
        <UploadIcon/>
        <span>
          Drop PDFs to insert pages
        </span>
      </Dropzone>
      <FileManager/>
    </Card>
  </Styles>
)

export default App
