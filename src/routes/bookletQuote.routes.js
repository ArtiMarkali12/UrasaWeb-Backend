import express from "express";
import {
  createBookletQuote,
  getAllQuotes,
  getQuoteById
} from "../controllers/bookletQuote.controller.js";

import validateBookletQuote from "../validators/bookletQuote.validator.js";

import {
  getOptionByCategory,
  addOptionValue,
  updateOptionValue,
  deleteOptionValue,
  getAllOptions
} from "../controllers/bookletOption.controller.js";

const router = express.Router();

/* ---------------- Booklet Quote CRUD APIs ---------------- */

router.post("/", validateBookletQuote, createBookletQuote);

router.get("/", getAllQuotes);

/* ---------------- Options APIs ---------------- */

router.get("/options", getAllOptions);

/* ---------------- Dropdown Options APIs ---------------- */

/* GET APIs */
// router.get("/book-sizes", (req, res) => getOptionByCategory(req, res));
// router.get("/orientations", (req, res) => getOptionByCategory(req, res));
// router.get("/binding-types", (req, res) => getOptionByCategory(req, res));
// router.get("/cover-styles", (req, res) => getOptionByCategory(req, res));
// router.get("/print-colors", (req, res) => getOptionByCategory(req, res));
// router.get("/paper-weights", (req, res) => getOptionByCategory(req, res));
// router.get("/paper-types", (req, res) => getOptionByCategory(req, res));
// router.get("/cover-finishes", (req, res) => getOptionByCategory(req, res));
// router.get("/page-edges", (req, res) => getOptionByCategory(req, res));
// router.get("/packaging", (req, res) => getOptionByCategory(req, res));
// router.get("/special-finishing", (req, res) => getOptionByCategory(req, res));





/* POST APIs */
router.post("/book-sizes", (req, res) => addOptionValue(req, res));
router.post("/binding-types", (req, res) => addOptionValue(req, res));
router.post("/cover-styles", (req, res) => addOptionValue(req, res));
router.post("/print-colors", (req, res) => addOptionValue(req, res));
router.post("/paper-weights", (req, res) => addOptionValue(req, res));
router.post("/paper-types", (req, res) => addOptionValue(req, res));
router.post("/cover-finishes", (req, res) => addOptionValue(req, res));
router.post("/page-edges", (req, res) => addOptionValue(req, res));
router.post("/packaging", (req, res) => addOptionValue(req, res));
router.post("/special-finishing", (req, res) => addOptionValue(req, res));

/* PUT APIs */
router.put("/book-sizes/:index", (req, res) => updateOptionValue(req, res));
router.put("/binding-types/:index", (req, res) => updateOptionValue(req, res));
router.put("/paper-types/:index", (req, res) => updateOptionValue(req, res));
router.put("/cover-finishes/:index", (req, res) => updateOptionValue(req, res));
router.put("/page-edges/:index", (req, res) => updateOptionValue(req, res));

/* DELETE APIs */
router.delete("/book-sizes/:index", (req, res) => deleteOptionValue(req, res));
router.delete("/binding-types/:index", (req, res) => deleteOptionValue(req, res));
router.delete("/paper-types/:index", (req, res) => deleteOptionValue(req, res));
router.delete("/cover-finishes/:index", (req, res) => deleteOptionValue(req, res));
router.delete("/page-edges/:index", (req, res) => deleteOptionValue(req, res));

/* ---------------- Booklet Quote ID Route (must be last) ---------------- */

router.get("/:id", getQuoteById);

export default router;