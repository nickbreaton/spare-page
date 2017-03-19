import { inject, observer } from 'mobx-react'
import Dropzone from 'react-dropzone'
import React, { Component } from 'react'
import Status from './status/Status'

@inject('file')
@inject('ui')
@observer
class FileDrop extends Component {
  render() {
    return (
      <Dropzone
        accept="application/pdf"
        children={this.props.children}
        multiple={false}
        onDragEnter={this.props.ui.fileEnter}
        onDragLeave={this.props.ui.fileLeave}
        onDrop={this.props.file.submit}
      />
    )
  }
}

export default FileDrop
