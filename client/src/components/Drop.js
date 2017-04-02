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
      <DropWrapper
        active={this.state.fileOver}
        desktopDirections="Drop PDFs to insert pages"
        mobileDirections="Select PDFs to insert pages"
      >
        <Dropzone
          accept="application/pdf"
          style={{
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            width: '100%',
            height: '100%',
            position: 'absolute'
          }}
          onDrop={this.handleDrop}
          onDragEnter={this.handleEnter}
          onDragLeave={this.handleLeave}
        />
        <UploadIcon/>
      </DropWrapper>
    )
  }
}

export default connect(state => state)(Drop)
