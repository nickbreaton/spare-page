import hummus from 'hummus';

export default function (path, res) {
  // create a PDF parser
  const parser = hummus.createReader(path);
  // create array to hold dimensions
  const boxes = [];
  // save dimensions for each page
  for (let i = 0; i < parser.getPagesCount(); i++) {
    boxes.push(parser.parsePage(i).getMediaBox());
  }
  // create write for HTTP response
  const writer = hummus.createWriter(new hummus.PDFStreamForResponse(res));
  // insert blank page at every other iteration, except last
  for (let i = 0; i < boxes.length * 2 - 1; i++) {
    // use current index (even) or last index (odd)
    const dimIndex = Math.floor(i / 2);
    const page = writer.createPage(...boxes[dimIndex]);
    // pages are copied on even, blank pages are written on odd
    if (i % 2 === 0) {
      writer.mergePDFPagesToPage(page, path, {
        type: hummus.eRangeTypeSpecific,
        specificRanges:[ [i / 2, i / 2] ]
      });
    }
    // always write
    writer.writePage(page);
  }
  // send response
  writer.end();
  res.end();
}
