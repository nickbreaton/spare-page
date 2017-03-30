import React from 'react'
import Styles from './Styles'
import Card from './Card';
import Dropzone from './Dropzone'
import File from './File'
import UploadIcon from '../../assets/icons/cloud_upload.svg'

const App = () => (
  <Styles>
    <Card>
      <Dropzone>
        <UploadIcon/>
        Drag PDFs to convert
      </Dropzone>
      <File progress={30} name="homework1.pdf" uploading/>
      <File progress={0}  name="election_results.pdf" pending/>
      <File progress={89} name="syllabus.pdf" downloading/>
    </Card>
  </Styles>
)

export default App
