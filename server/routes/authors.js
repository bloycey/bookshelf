import { Router } from "express";
const router = Router();

router.get("/authors", (req, res) => {
	res.send(`A list of authors in the database in JSON format`);
});

export default router;
