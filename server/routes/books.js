import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
	res.send(`A list of books in the database in JSON format`);
});

export default router;
