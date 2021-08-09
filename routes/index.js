const expres = require('express');
const pdfService = require('../services/pdf-service');

const router = expres.Router();

router.get('/invoice', (req, res) => {
    // const stream = res.writeHead(200, {
    //     'Content-Type': 'application/pdf',
    //     'Content-Disposition': 'attachment;filename=invoice.pdf'
    // });
    pdfService.generatePdf();
});

module.exports = router;