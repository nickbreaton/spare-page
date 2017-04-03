import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { download, remove } from '../state/files'
import File from './File'
import React from 'react'

const FileManager = (props) => (
  <div>
    {mapFilesToComponents(props)}
  </div>
)

const mapFilesToComponents = (props) => (
  props.files.map((file) => (
    <File
      {...file}
      key={file.uuid}
      download={() => props.download(file.uuid)}
      remove={() => props.remove(file.uuid)}
    />
  ))
)

const mapStateToProps = (state) => (
  { files: state.files }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ download, remove }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FileManager)
