import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { add } from '../state/files'
import React from 'react'
import Drop from './Drop'

const DropContainer = (props) => (
  <Drop addFile={props.add} />
)

const mapStateToProps = (state) => (
  { files: state.files }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ add }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(DropContainer)
