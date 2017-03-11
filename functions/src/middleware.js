import fileUpload from 'express-fileupload';

export default async function (req, res) {
  return new Promise((resolve) => {
    // file upload express middleware
    fileUpload()(req, res, resolve)
  })
}
