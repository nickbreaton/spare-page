import { createAction, handleActions } from 'redux-actions'
import { saveAs } from 'file-saver'
import getUUID from 'uuid/v4'
import isSafari from 'is-safari'
import request from 'superagent'

// get unique name for window[FILES]
const FILES = getUUID()

// ACTION CREATORS

export const complete = createAction('FILE_COMPLETE')

export const error = createAction('FILE_ERROR')

export const progress = createAction('FILE_PROGRESS', (uuid, percent) => {
  return { percent, uuid }
})

export const remove = createAction('FILE_REMOVE')

export const upload = createAction('FILE_UPLOAD', (uuid, name) => {
  return { name, uuid }
})

// ASYNC ACTION CREATORS

export const download = (uuid) => {
  return (dispatch, getState) => {
    if (getState().files.filter(files => files.uuid === uuid).length > 0) {
      const file = window[FILES][uuid]
      saveAs(file.body, file.name)
    }
  }
}

export const add = (file) => {
  return (dispatch) => {
    // create unique ID
    const uuid = getUUID()
    // create new file name
    const name = file.name.replace(/.pdf$/, ' (printable).pdf')
    // start upload state
    dispatch(upload(uuid, file.name))
    // send file to server
    request
      .post(
        process.env.NODE_ENV === 'production'
          ? 'https://us-central1-spare-page.cloudfunctions.net/parse'
          : '/parse'
      )
      .responseType('blob')
      .attach('document', file)
      .on('progress', (event) => {
        // inform store of progress
        dispatch(progress(uuid, event.percent || 100))
      })
      .end((err, res) => {
        if (err) {
          // handle error
          dispatch(error(uuid))
        } else {
          // complete
          dispatch(complete(uuid))
          // save file to window object
          window[FILES] = window[FILES] || {}
          window[FILES][uuid] = { name, body: res.body }
          // dispatch download action
          //  (Safari will overwrite current tab if not triggered by click event)
          //  https://github.com/eligrey/FileSaver.js/issues/129#issuecomment-222720262
          if (!isSafari) {
            dispatch(download(uuid))
          }
        }
      })
  }
}

// REDUCER

export default handleActions({
  [complete]: (state, action) => {
    return state.map((file) => {
      if (file.uuid !== action.payload) {
        return file
      }
      return {
        ...file,
        pending: false,
        complete: true
      }
    })
  },
  [error]: (state, action) => {
    return state.map((file) => {
      if (file.uuid !== action.payload) {
        return file
      }
      return {
        ...file,
        uploading: false,
        pending: false,
        error: true
      }
    })
  },
  [progress]: (state, action) => {
    return state.map((file) => {
      if (file.uuid !== action.payload.uuid) {
        return file
      }
      if (action.payload.percent === 100) {
        return {
          ...file,
          progress: 100,
          uploading: false,
          pending: true
        }
      }
      return {
        ...file,
        progress: action.payload.percent
      }
    })
  },
  [remove]: (state, action) => {
    return state.filter(file => file.uuid !== action.payload)
  },
  [upload]: (state, action) => {
    const addition = {
      name: action.payload.name,
      uuid: action.payload.uuid,
      pending: false,
      uploading: true,
      complete: false
    }
    return [ addition, ...state ]
  }
}, [])
