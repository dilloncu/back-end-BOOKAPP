const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bp = require("body-parser");

const app = express();
app.use(cors());
app.use(bp.json());

const PORT = process.env.PORT || 8099;
const Book = require("./models/Books");
mongoose.connect(process.env.DATABASE_URL);
app.get("/", (request, response) => {
  response.status(200).json("test request received");
});

app.get("/book", async (request, response) => {
  const allBooks = await Book.find(request.query);
  console.log("I do work");
  response.status(200).json(allBooks);
});

app.post("/book", async (request, response) => {
  try {
    const newBook = await Book.create(request.body);
    response.status(200).json(newBook);
  } catch (error) {
    response.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
