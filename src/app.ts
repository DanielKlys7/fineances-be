import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import { Book } from "./schemas/book";
import { doesNotMatch } from "assert";

const url = "mongodb://db:27017/database";

mongoose.connect(url, (err) => {
  if (err) console.log(err);
  else console.log("mongodb is connected");
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json());
const port = 3000;

app.get("/", async (req, res) => {
  const books = await Book.find({});

  res.json({ items: books, total: books.length });
});

app.post("/", async (req, res) => {
  const book = new Book({ ...req.body });

  const { _id, title } = await book.save();
  res.json({ id: _id, title });
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
