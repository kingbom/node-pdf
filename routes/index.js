const expres = require('express');
const pdfService = require('../services/pdf-service');

const router = expres.Router();

router.get('/invoice', (req, res) => {
    pdfService.generatePdf();
});

module.exports = router;
