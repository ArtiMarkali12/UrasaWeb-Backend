import express from "express";
const router = express.Router();

import bookletController from "../controllers/booklet.controller.js";

// Create booklet quote
router.post("/create", bookletController.createBooklet);

// Get all quotes
router.get("/", bookletController.getAllBooklets);

// Get single quote
router.get("/:id", bookletController.getBookletById);

// Delete quote
router.delete("/:id", bookletController.deleteBooklet);

export default router;