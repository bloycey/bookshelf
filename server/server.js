import express from "express";
import bodyParser from "body-parser";
import books from "./routes/books";
import book from "./routes/book";
import author from "./routes/author";
import authors from "./routes/authors";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/books", books);
app.use("/book", book);
app.use("/author", author);
app.use("/authors", authors);

app.listen(port, () => console.log(`Listening on port ${port}`));
