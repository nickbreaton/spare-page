import { createAction, handleActions } from 'redux-actions'
import getUUID from 'uuid/v4'
import request from 'superagent'
import downloadjs from 'downloadjs'
import localforage from 'localforage'

// ACTION CREATORS

export const create = createAction('ERROR_CREATE')

export const remove = createAction('ERROR_REMOVE')

// ASYNC ACTION CREATORS

export const throwError = (message, timeout = 3000) => {
  return (dispatch) => {
    // create a new error message
    dispatch(create(message))
    // remove message after specified time
    setTimeout(() => {
      dispatch(remove())
    }, timeout)
  }
}

// REDUCER

export default handleActions({
  [create]: (state, action) => {
    return {
      active: true,
      lastMessage: action.payload
    }
  },
  [remove]: (state, action) => {
    return {
      ...state,
      active: false
    }
  }
}, { active: false, lastMessage: '' })
