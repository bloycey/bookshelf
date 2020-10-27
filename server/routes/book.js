import { Router } from "express";
const router = Router();

router.post("/", (req, res) => {
	res.send(
		`Creates a new book with the specified details - Expects a JSON body ${req.body.post}`
	);
});

router.get("/:id", (req, res) => {
	res.send(
		`A detail view of the specified book id ${req.params.id}. Nest author details in JSON format`
	);
});

export default router;
