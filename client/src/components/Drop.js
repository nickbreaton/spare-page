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
    // merge all files together
    const files = [...acceptedFiles, ...rejectedFiles]
    // check for too many files
    if (files.length > 3) {
      this.props.throwError('You may not upload more than three files at once.', 4000)
      return
    }
    // check for invalid files
    for (let file of files) {
      // some browsers (IE) are not adding a content type, so also allow no type
      if (!(file.type === 'application/pdf' || file.type === '')) {
        this.props.throwError('All files must be in a PDF format.')
        return
      }
    }
    // add files dropped
    files.forEach((file) => {
      this.props.addFile(file)
    })
  }
  render() {
    return (
      <DropWrapper
        error={this.props.error}
        active={this.state.fileOver}
        desktopDirections="Drop PDFs to make printable"
        mobileDirections="Select PDFs to make printable"
      >
        <Dropzone
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
