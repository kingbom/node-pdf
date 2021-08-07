const express = require('express');
const router = require('./routes');

app = express();
app.use(express.json());
app.use(router);
app.listen(3000, () => console.log('server running on port 3000'));