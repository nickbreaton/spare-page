import fileupload from 'express-fileupload'
import hummus from 'hummus'
import tmp from 'tmp'
import range from 'lodash.range'

export default async function (req, res) {
  // allow CORS from any site
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  // respond immdediatly preflight requests
  if (req.method === 'OPTIONS') {
    res.send(200)
    return
  }

  // enable file upload middleware
  await new Promise(resolve => fileupload()(req, res, resolve))

  // create a temporary file to store upload
  const file = tmp.fileSync()

  // deny if HTTP is not POST
  if (req.method !== 'POST') {
    res.sendStatus(404)
    return
  }

  // deny if no 'document' file
  if (!req.files || !req.files.document) {
    res.status(400)
    res.send(`Request must contain form data with a file as the 'document' key.`)
    return
  }

  // deny if file is not a PDF
  if (req.files.document.mimetype !== 'application/pdf') {
    res.status(400)
    res.send('The file provided was not a PDF.')
    return
  }

  // save upload to temporary location
  await new Promise((resolve, reject) => {
    req.files.document.mv(file.name, (error) => {
      error ? reject(error) : resolve()
    })
  })

  // prepare response
  res.contentType('application/pdf')

  // create a PDF reader
  const parser = hummus.createReader(file.name)

  // create array to hold page dimensions
  const pages = []

  // fetch page dimensions of each page
  range(0, parser.getPagesCount()).forEach((i) => {
    pages.push(parser.parsePage(i).getMediaBox())
  })

  // create a PDF writer and attach it to HTTP response
  const writer = hummus.createWriter(new hummus.PDFStreamForResponse(res))

  // copy original pages and insert blank pages of same dimensions
  range(0, pages.length * 2).forEach((i) => {
    const pageIndex = Math.floor(i / 2)
    const page = writer.createPage(...pages[pageIndex])
    if (i % 2 === 0) {
      writer.mergePDFPagesToPage(page, file.name, {
        type: hummus.eRangeTypeSpecific,
        specificRanges: [[pageIndex, pageIndex]]
      })
    }
    writer.writePage(page)
  })

  // complete response
  writer.end()
  res.end()

  // remove temporary file
  file.removeCallback()
}
