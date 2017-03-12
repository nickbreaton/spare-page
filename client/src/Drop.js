import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import download from 'downloadjs'

class Drop extends Component {
  constructor() {
    super()
    this.upload = this.upload.bind(this)
    this.state = {
      lock: false
    }
  }
  async upload(acceptedFiles) {
    if (!this.state.lock) {
      // lock uploader
      this.setState({ lock: true })

      // only accept one file
      const file = acceptedFiles[0]

      // add file to form data
      const formData = new FormData()
      formData.append('document', file)

      // convert file on server
      const response = await fetch('https://us-central1-spare-page.cloudfunctions.net/parse', {
        method: 'POST',
        body: formData
      })

      // force download of new file
      download(await response.blob(), file.name)

      // unlock uploader
      this.setState({ lock: false })
    }
  }
  render() {
    return (
      <Dropzone onDrop={this.upload} multiple={false} accept="application/pdf">
        {this.state.lock ? 'loading' : 'ready'}
        {this.props.children}
      </Dropzone>
    )
  }
}

export default Drop
