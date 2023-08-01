const mongoose = require("mongoose");
const{Schema}=mongoose
const bookSchema = new Schema({
    title:String,
    description:String,
    status:String
})
const Book = mongoose.model("Model", bookSchema)
module.exports=Book