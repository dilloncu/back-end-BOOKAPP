

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");


const app = express();
app.use(cors());

const PORT = process.env.PORT || 8099;

app.get('/', (request, response) => {

  response.get('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
