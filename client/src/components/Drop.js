import { complete, progress, upload } from '../state/files'
import { connect } from 'react-redux'
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
    // reset state of drop
    this.handleLeave()
    // add files dropped
    acceptedFiles.forEach((file) => {
      this.props.addFile(file)
    })
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
        <DropWrapper
          active={this.state.fileOver}
          desktopDirections="Drop PDFs to insert pages"
          mobileDirections="Select PDFs to insert pages"
        >
          <UploadIcon/>
        </DropWrapper>
      </Dropzone>
    )
  }
}

export default connect(state => state)(Drop)
