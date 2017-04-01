export default function (state = [], { type, payload }) {
  if (type === 'DELETE_FILE') {
    return state.filter(file => file.uuid !== payload.uuid)
  }
  if (type === 'UPLOAD_FILE') {
    return [{
      complete: false,
      data: null,
      downloading: false,
      name: payload.name,
      pending: false,
      progress: 0,
      uploading: true,
      uuid: payload.uuid,
    }, ...state]
  }
  if (type === 'UPDATE_FILE_PROGRESS') {
    return state.map(file => {
      if (file.uuid !== payload.uuid) {
        return file
      }
      return {
        ...file,
        progress: payload.progress
      }
    })
  }
  if (type === 'PENDING_FILE') {
    return state.map(file => {
      if (file.uuid !== payload) {
        return file
      }
      return {
        ...file,
        pending: true,
        uploading: false
      }
    })
  }
  return state
}
