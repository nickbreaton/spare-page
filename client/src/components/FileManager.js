import { connect } from 'react-redux'
import React, { Component } from 'react'
import File from './File'

class FileManager extends Component {
  render() {
    const files = this.props.files.map((file, i) => (
      <File
        {...file}
        key={file.uuid}
        onCancel={() => this.props.dispatch({
          type: 'DELETE_FILE',
          payload: file
        })}
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
