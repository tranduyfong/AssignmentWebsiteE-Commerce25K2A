const express = require('express');
const webRouter = require('./routes/web');
const connection = require('./configs/database');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/', webRouter);

connection();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
