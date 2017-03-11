import fileUpload from 'express-fileupload';

export default (req, res) => {
  fileUpload()(req, res, () => {
    const file = req.files.file;
    res.contentType('application/pdf')
    res.send(file.data)
  });
}
