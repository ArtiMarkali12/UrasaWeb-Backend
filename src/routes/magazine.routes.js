import express from "express";
const router = express.Router();

import magazineController from "../controllers/magazine.controller.js";

/* -------- Magazine Quote APIs -------- */

router.post("/", magazineController.createMagazineQuote);

router.get("/", magazineController.getAllQuotes);

router.get("/:id", magazineController.getMagazineById);

router.delete("/:id", magazineController.deleteMagazine);

export default router;