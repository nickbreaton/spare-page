export default function (file, path) {
  return new Promise((resolve, reject) => {
    file.mv(path, (error) => {
      // throw error if PDF can't be saved
      if (error) return reject(error)
      // else continue
      resolve()
    })
  })
}
