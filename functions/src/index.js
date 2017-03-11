import createTemp from './create-temp';
import insertPages from './insert-pages';
import middleware from './middleware';
import saveUpload from './save-upload';

export default async function (req, res) {
  // set content type of response
  res.contentType('application/pdf');
  // include express middleware
  await parseMiddleware(req, res);
  // fetch a temporary file
  const [ path, clean ] = await createTemp();
  // save PDF as temporary file
  await saveUpload(req.files.document, path);
  // insert blank pages between each page
  insertPages(path, res);
  // clean up temporary files
  clean();
}
