import { connect } from 'react-redux'
import React, { Component } from 'react'
import File from './File'
import { remove } from '../reducers/files'

class FileManager extends Component {
  render() {
    const files = this.props.files.map((file, i) => (
      <File
        {...file}
        key={file.uuid}
        onCancel={() => this.props.dispatch(remove(file.uuid))}
      />
    ))
    return (
      <div>
        {files}
      </div>
    )
  }
}

export default connect(state => state)(FileManager)
