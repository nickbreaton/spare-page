export default function (req, res) {
  // check HTTP method is POST
  if (req.method !== 'POST') {
    res.sendStatus(404);
    return false;
  }
  // check for a 'document' file
  if (!req.files || !req.files.document) {
    res.status(400);
    res.send(`Request must contain form data with a file as the 'document' key.`);
    return false;
  }
  // check that file is PDF
  if (req.files.document.mimetype !== 'application/pdf') {
    res.status(400);
    res.send('The file provided was not a PDF.')
    return false;
  }
  // valid request
  return true;
}
