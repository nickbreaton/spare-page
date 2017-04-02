import { createAction, handleActions } from 'redux-actions'
import getUUID from 'uuid/v4'
import request from 'superagent'
import downloadjs from 'downloadjs'
import localforage from 'localforage'

// ACTION CREATORS

export const complete = createAction('FILE_COMPLETE')

export const progress = createAction('FILE_PROGRESS', (uuid, percent) => {
  return { percent, uuid }
})

export const remove = createAction('FILE_REMOVE')

export const upload = createAction('FILE_UPLOAD', (uuid, name) => {
  return { name, uuid }
})

// ASYNC ACTION CREATORS

export const download = (uuid) => {
  return (dispatch) => {
    localforage.getItem(uuid, function (err, value) {
      if (value) {
        downloadjs(value.body, value.name)
      }
    })
  }
}

export const add = (file) => {
  return (dispatch) => {
    // create unique ID
    const uuid = getUUID()
    // create new file name
    const name = file.name.replace(/.pdf$/, ' (spare-page).pdf')
    // start upload state
    dispatch(upload(uuid, file.name))
    // send file to server
    request
      .post('/parse')
      .responseType('blob')
      .attach('document', file)
      .on('progress', (event) => {
        // inform store of progress
        dispatch(progress(uuid, event.percent || 100))
      })
      .end((err, res) => {
        // complete
        dispatch(complete(uuid))
        // download file
        localforage.setItem(uuid, { name, body: res.body }, () => {
          // dispatch download action
          dispatch(download(uuid))
        })
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
