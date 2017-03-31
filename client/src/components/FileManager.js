import React, { Component } from 'react'
import File from './File'

class FileManager extends Component {
  state = {
    files: []
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState((state) => {
        return {
          files: [...state.files, {
            name: 'homework2.pdf',
            uploading: true,
            progress: 0
          }]
        }
      })
    }, 1000)
    setTimeout(() => {
      this.setState((state) => {
        return {
          files: [{
            ...state.files[0],
            progress: 100
          }]
        }
      })
    }, 1500)
  }
  render() {
    const files = this.state.files.map((file, i) => (
      <File {...file} key={file.name}/>
    ))
    return (
      <div>
        {files}
      </div>
    )
  }
}

export default FileManager
