import { connect } from 'react-redux'
import DropWrapper from './DropWrapper'
import Dropzone from 'react-dropzone'
import React, { Component } from 'react'
import UploadIcon from '../../assets/icons/cloud_upload.svg'
import request from 'superagent'
import download from 'downloadjs'
import uuid from 'uuid'

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
      const id = uuid.v4()

      this.props.dispatch({
        type: 'UPLOAD_FILE',
        payload: {
          name: file.name,
          uuid: id
        }
      })

      request
        .post('/parse')
        .responseType('blob')
        .attach('document', file)
        .on('progress', (event) => {
          if (event.direction === 'upload') {
            console.log('test');
            this.props.dispatch({
              type: 'UPDATE_FILE_PROGRESS',
              payload: {
                progress: event.percent,
                uuid: id
              }
            })

            if (event.percent === 100) {
              this.props.dispatch({
                type: 'PENDING_FILE',
                payload: id
              })
            }
          }
        })
        .end((err, res) => {
          // download(res.body, 'download.pdf')
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
