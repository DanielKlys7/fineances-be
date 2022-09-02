import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
});

export const Book = mongoose.model("Book", bookSchema);
