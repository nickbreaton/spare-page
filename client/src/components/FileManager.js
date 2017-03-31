import { connect } from 'react-redux'
import React, { Component } from 'react'
import File from './File'

class FileManager extends Component {
  render() {
    const files = this.props.files.map((file, i) => (
      <File {...file} key={file.name}/>
    ))
    return (
      <div>
        {files}
      </div>
    )
  }
}

export default connect(state => state)(FileManager)
