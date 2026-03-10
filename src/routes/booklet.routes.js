import express from "express";
const router = express.Router();

import bookletController from "../controllers/booklet.controller.js";
import optionsController from "../controllers/options.controller.js";
import validateBookletQuote from "../validators/bookletQuote.validator.js";

/* ---------------- Booklet Quote CRUD APIs ---------------- */

router.post("/", validateBookletQuote, bookletController.createBookletQuote);

router.get("/", bookletController.getAllQuotes);

router.get("/:id", bookletController.getBookletById);

router.delete("/:id", bookletController.deleteBooklet);

/* ---------------- Options APIs ---------------- */

router.get("/options", optionsController.getAllOptions);

/* POST APIs - Add Option Values */
router.post("/book-sizes", (req, res) => optionsController.addOptionValue(req, res));
router.post("/binding-types", (req, res) => optionsController.addOptionValue(req, res));
router.post("/cover-styles", (req, res) => optionsController.addOptionValue(req, res));
router.post("/print-colors", (req, res) => optionsController.addOptionValue(req, res));
router.post("/paper-weights", (req, res) => optionsController.addOptionValue(req, res));
router.post("/paper-types", (req, res) => optionsController.addOptionValue(req, res));
router.post("/cover-finishes", (req, res) => optionsController.addOptionValue(req, res));
router.post("/page-edges", (req, res) => optionsController.addOptionValue(req, res));
router.post("/packaging", (req, res) => optionsController.addOptionValue(req, res));
router.post("/special-finishing", (req, res) => optionsController.addOptionValue(req, res));

/* PUT APIs - Update Option Values */
router.put("/book-sizes/:index", (req, res) => optionsController.updateOptionValue(req, res));
router.put("/binding-types/:index", (req, res) => optionsController.updateOptionValue(req, res));
router.put("/paper-types/:index", (req, res) => optionsController.updateOptionValue(req, res));
router.put("/cover-finishes/:index", (req, res) => optionsController.updateOptionValue(req, res));
router.put("/page-edges/:index", (req, res) => optionsController.updateOptionValue(req, res));

/* DELETE APIs - Delete Option Values */
router.delete("/book-sizes/:index", (req, res) => optionsController.deleteOptionValue(req, res));
router.delete("/binding-types/:index", (req, res) => optionsController.deleteOptionValue(req, res));
router.delete("/paper-types/:index", (req, res) => optionsController.deleteOptionValue(req, res));
router.delete("/cover-finishes/:index", (req, res) => optionsController.deleteOptionValue(req, res));
router.delete("/page-edges/:index", (req, res) => optionsController.deleteOptionValue(req, res));

export default router;
