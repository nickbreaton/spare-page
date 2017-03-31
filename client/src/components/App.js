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
        <span>
          Drop PDFs to insert pages
        </span>
      </Dropzone>
      <File name="homework1.pdf" uploading progress={30}/>
      <File name="election_results.pdf" complete/>
      <File name="syllabus.pdf" downloading progress={89}/>
      <File name="schedule.pdf" pending/>
    </Card>
  </Styles>
)

export default App
