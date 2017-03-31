import DropWrapper from './DropWrapper'
import Dropzone from 'react-dropzone'
import React, { Component } from 'react'
import UploadIcon from '../../assets/icons/cloud_upload.svg'

class Drop extends Component {
  state = {
    fileOver: false
  }
  handleEnter = () => {
    this.setState((state) => {
      return { fileOver: true }
    })
  }
  handleLeave = () => {
    this.setState((state) => {
      return { fileOver: false }
    })
  }
  handleDrop = (acceptedFiles, rejectedFiles) => {
    this.handleLeave()

    // tmp
    console.log(acceptedFiles, rejectedFiles)
  }
  render() {
    return (
      <Dropzone
        accept="application/pdf"
        style={{}}
        onDrop={this.handleDrop}
        onDragEnter={this.handleEnter}
        onDragLeave={this.handleLeave}
      >
        <DropWrapper active={this.state.fileOver}>
          <UploadIcon/>
          <span>
            Drop PDFs to insert pages
          </span>
        </DropWrapper>
      </Dropzone>
    )
  }
}

export default Drop
