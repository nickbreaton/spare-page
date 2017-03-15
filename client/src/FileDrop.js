import download from 'downloadjs'
import Dropzone from 'react-dropzone'
import Status from './Status'
import React, { Component } from 'react'
import request from 'superagent'

class FileDrop extends Component {
  constructor() {
    super()
    this.upload = this.upload.bind(this)
    this.state = {
      lock: false,
      upload: 0,
      download: 0
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
          .on('progress', (event) => {
            this.setState({ [event.direction]: event.percent })
          })
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
  render() {
    return (
      <Dropzone onDrop={this.upload} multiple={false} accept="application/pdf">
        <Status
          loading={this.state.lock}
          progress={(this.state.upload + this.state.download) / 2}
        />
      </Dropzone>
    )
  }
}

export default FileDrop
