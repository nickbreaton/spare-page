import { createAction, handleActions } from 'redux-actions'

export const remove = createAction('FILE_REMOVE')

export default handleActions({
  [remove]: (state, action) => {
    return state.filter(file => file.uuid !== action.payload)
  }
}, [ { name: 'default_file.pdf', uuid: 0, uploading: true, progress: 63 } ])
