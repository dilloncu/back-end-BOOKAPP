

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");


const app = express();
app.use(cors());

const PORT = process.env.PORT || 8099;
const Book = require("./models/Books");
mongoose.connect(process.env.DATABASE_URL);
app.get('/', (request, response) => {

  response.status(200).json('test request received')

})

app.get("/book", async (request,response)=>{
  const allBooks = await Book.find(request.query);
  console.log("I do work");
  response.status(200).json(allBooks);
  

});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
