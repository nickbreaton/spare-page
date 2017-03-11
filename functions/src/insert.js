import hummus from 'hummus';

export default function (path, res) {
  // set HTTP response type
  res.contentType('application/pdf');


  const parser = hummus.createReader(path);

  // create array to hold dimensions
  const boxes = [];

  // get dimensions for each page
  for (let i = 0; i < parser.getPagesCount(); i++) {
    boxes.push(parser.parsePage(i).getMediaBox());
  }

  // create write for HTTP response
  const writer = hummus.createWriter(new hummus.PDFStreamForResponse(res));

  for (let i = 0; i < boxes.length * 2 - 1; i++) {
    const dimIndex = Math.floor(i / 2);
    const page = writer.createPage(...boxes[dimIndex]);

    if (i % 2 === 0) {
      writer.mergePDFPagesToPage(page, path, {
        type: hummus.eRangeTypeSpecific,
        specificRanges:[ [i / 2, i / 2] ]
      });
    }

    writer.writePage(page);
  }

  // send response
  writer.end();
  res.end();
}
