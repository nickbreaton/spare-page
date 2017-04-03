import { combineReducers } from 'redux'
import errors from './errors'
import files from './files'

export default combineReducers({
  errors,
  files
})
