const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/books", (req, res) => {
	res.send(`A list of books in the database in JSON format`);
});

app.get("/book/:id", (req, res) => {
	res.send(
		`A detail view of the specified book id ${req.params.id}. Nest author details in JSON format`
	);
});

app.get("/authors", (req, res) => {
	res.send(`A list of authors in the database in JSON format`);
});

app.get("/author/:id", (req, res) => {
	res.send(`A detail view of the specified author id`);
});

app.post("/author", (req, res) => {
	res.send(
		`Creates a new author with the specified details - Expects a JSON body ${req.body.post}`
	);
});

app.post("/book", (req, res) => {
	res.send(
		`Creates a new book with the specified details - Expects a JSON body ${req.body.post}`
	);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
