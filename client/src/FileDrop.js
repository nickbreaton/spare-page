import download from 'downloadjs'
import Dropzone from 'react-dropzone'
import Status from './status/Status'
import React, { Component } from 'react'
import request from 'superagent'

class FileDrop extends Component {
  constructor() {
    super()

    // bind functionss
    this.enter = this.enter.bind(this)
    this.leave = this.leave.bind(this)
    this.upload = this.upload.bind(this)

    // set initial state
    this.state = {
      lock: false,
      fileOver: false
    }
  }
  async upload(acceptedFiles) {
    if (!this.state.lock) {
      // lock uploader
      this.setState({ lock: true })

      // only accept one file
      const file = acceptedFiles[0]

      // convert file on server
      const newFile = await new Promise((resolve, reject) => {
        request
          .post('https://us-central1-spare-page.cloudfunctions.net/parse')
          .responseType('blob')
          .attach('document', file)
          .end((err, res) => {
            err ? reject(err) : resolve(res.body)
          })
      })

      // force download of new file
      download(newFile, file.name)

      // unlock uploader
      this.setState({ lock: false, upload: 0, download: 0 })
    }
  }
  enter() {
    this.setState({
      fileOver: true
    })
  }
  leave() {
    this.setState({
      fileOver: false
    })
  }
  render() {
    return (
      <Dropzone
        onDrop={this.upload}
        onDragEnter={this.enter}
        onDragLeave={this.leave}
        multiple={false}
        accept="application/pdf"
      >
        <Status
          loading={this.state.lock}
          fileOver={this.state.fileOver}
        />
      </Dropzone>
    )
  }
}

export default FileDrop
