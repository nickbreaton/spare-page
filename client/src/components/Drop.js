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
    this.handleLeave()

    acceptedFiles.forEach(file => {
      this.props.dispatch({
        type: 'UPLOAD_FILE',
        payload: {
          name: file.name,
          raw: file
        }
      })
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

export default connect(state => state)(Drop)
