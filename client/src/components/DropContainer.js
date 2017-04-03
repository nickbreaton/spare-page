import { add } from '../state/files'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { throwError } from '../state/errors'
import Drop from './Drop'
import React from 'react'

const DropContainer = (props) => (
  <Drop
    error={props.error}
    addFile={props.add}
    throwError={props.throwError}
  />
)

const mapStateToProps = (state) => (
  {
    error: state.errors.active,
    files: state.files
  }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ add, throwError }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(DropContainer)
