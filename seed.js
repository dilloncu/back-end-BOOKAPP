
const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL);
const Book = require("./models/Books")

async function seed(){
await Book.create({
    title: "LOTR",
    description: "A ring needs to be destroyed",
    status: "Read"
})

await Book.create({
    title: "Seven Habits of Highly Effective People",
    description: "Leadership",
    status: "Read"
})

await Book.create({
    title: "Jon Duckett HTML&CSS",
    description: "Design and build websites",
    status: "Read"
})
console.log('books plz');
mongoose.disconnect();
}
seed();
