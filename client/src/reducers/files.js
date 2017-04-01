import uuid from 'uuid'

export default function (state = [], { type, payload }) {
  if (type === 'DELETE_FILE') {
    return state.filter(file => file.uuid !== payload.uuid)
  }
  if (type === 'UPLOAD_FILE') {
    return [{
      uuid: uuid.v4(),
      name: payload.name,
      raw: payload.raw,
      uploading: true,
      progress: 0
    }, ...state]
  }
  return state
}
