import fileUpload from 'express-fileupload';
import tmp from 'tmp';
import insert from './insert';

export default function (req, res) {
  tmp.file(function (err, path, descriptor, clean) {
    // throw error getting temporary file path
    if (err) throw err;

    fileUpload()(req, res, () => {
      req.files.file.mv(path, (err) => {
        // throw error writing to temporary file
        if (err) throw err;

        insert(path, res);

        // clean up temporary files
        clean();
      });
    });
  });
}
