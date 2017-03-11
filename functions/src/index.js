import fileUpload from 'express-fileupload';

export default function (req, res) {
  fileUpload()(req, res, () => {

  });
}
