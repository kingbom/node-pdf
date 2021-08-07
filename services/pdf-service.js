const PDFDocument = require('pdfkit');

const buildPDF = (dataCallback, endCallback) => {
    const doc = new PDFDocument();
    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    doc
        .fontSize(25)
        .text('Some text with an embedded font!', 100, 100);

    doc
        .fontSize(25)
        .text('some text with an embedded font!', 20, 125);

    doc
        .addPage()
        .fontSize(25)
        .text('Page 2', 100, 100);

    doc.end();
}

module.exports = { buildPDF };