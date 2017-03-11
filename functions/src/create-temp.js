import tmp from 'tmp'

export default function () {
  return new Promise((resolve, reject) => {
    tmp.file(function (err, path, descriptor, clean) {
      // exit on error
      if (err) return reject(err)
      // resolve with path and clean up callback
      resolve([ path, clean ])
    })
  })
}
