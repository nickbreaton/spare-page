import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { remove } from '../reducers/files'
import File from './File'
import React from 'react'

const FileManager = (props) => (
  <div>
    {mapFilesToComponents(props)}
  </div>
)

const mapFilesToComponents = ({ files, remove }) => (
  files.map((file) => (
    <File
      {...file}
      key={file.uuid}
      onCancel={() => remove(file.uuid)}
    />
  ))
)

const mapStateToProps = (state) => (
  { files: state.files }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ remove }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FileManager)
