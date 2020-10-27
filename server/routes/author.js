import { Router } from "express";
const router = Router();

router.post("/author", (req, res) => {
	res.send(
		`Creates a new author with the specified details - Expects a JSON body ${req.body.post}`
	);
});

router.get("/author/:id", (req, res) => {
	res.send(`A detail view of the specified author id`);
});

export default router;
