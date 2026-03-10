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
router.post("/book-sizes", (req, res) => optionsController.addOptionValue(req, res, "bookSizes"));
router.post("/binding-types", (req, res) => optionsController.addOptionValue(req, res, "bindingTypes"));
router.post("/cover-styles", (req, res) => optionsController.addOptionValue(req, res, "coverStyles"));
router.post("/print-colors", (req, res) => optionsController.addOptionValue(req, res, "printColors"));
router.post("/paper-weights", (req, res) => optionsController.addOptionValue(req, res, "paperWeights"));
router.post("/paper-types", (req, res) => optionsController.addOptionValue(req, res, "paperTypes"));
router.post("/cover-finishes", (req, res) => optionsController.addOptionValue(req, res, "coverFinishes"));
router.post("/page-edges", (req, res) => optionsController.addOptionValue(req, res, "pageEdges"));
router.post("/packaging", (req, res) => optionsController.addOptionValue(req, res, "packaging"));
router.post("/special-finishing", (req, res) => optionsController.addOptionValue(req, res, "specialFinishing"));

/* PUT APIs - Update Option Values */
router.put("/book-sizes/:index", (req, res) => optionsController.updateOptionValue(req, res, "bookSizes"));
router.put("/binding-types/:index", (req, res) => optionsController.updateOptionValue(req, res, "bindingTypes"));
router.put("/paper-types/:index", (req, res) => optionsController.updateOptionValue(req, res, "paperTypes"));
router.put("/cover-finishes/:index", (req, res) => optionsController.updateOptionValue(req, res, "coverFinishes"));
router.put("/page-edges/:index", (req, res) => optionsController.updateOptionValue(req, res, "pageEdges"));

/* DELETE APIs - Delete Option Values */
router.delete("/book-sizes/:index", (req, res) => optionsController.deleteOptionValue(req, res, "bookSizes"));
router.delete("/binding-types/:index", (req, res) => optionsController.deleteOptionValue(req, res, "bindingTypes"));
router.delete("/paper-types/:index", (req, res) => optionsController.deleteOptionValue(req, res, "paperTypes"));
router.delete("/cover-finishes/:index", (req, res) => optionsController.deleteOptionValue(req, res, "coverFinishes"));
router.delete("/page-edges/:index", (req, res) => optionsController.deleteOptionValue(req, res, "pageEdges"));

export default router;
