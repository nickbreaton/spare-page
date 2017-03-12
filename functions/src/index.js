import createTemp from './create-temp'
import enableCors from './enable-cors'
import insertPages from './insert-pages'
import middleware from './middleware'
import saveUpload from './save-upload'
import validateRequest from './validate-request'

export default async function (req, res) {
  // enable CORS
  enableCors(res)
  // include express middleware
  await middleware(req, res)
  // fetch a temporary file
  const [ path, clean ] = await createTemp()
  // exit on failed validation
  if (!validateRequest(req, res)) return
  // save PDF as temporary file
  await saveUpload(req.files.document, path)
  // set content type of response
  res.contentType('application/pdf')
  // insert blank pages between each page
  insertPages(path, res)
  // send response
  res.end()
  // clean up temporary files
  clean()
}
