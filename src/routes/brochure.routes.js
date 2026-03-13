import express from "express";
const router = express.Router();

import brochureController from "../controllers/brochure.controller.js";
import brochureOptionsController from "../controllers/brochureOptions.controller.js";
import validateBrochureQuote from "../validators/brochure.validator.js";

/* ---------------- Brochure CRUD APIs ---------------- */

router.post("/", validateBrochureQuote, brochureController.createBrochureQuote);

router.get("/", brochureController.getAllBrochures);

/* ---------------- Brochure Options APIs ---------------- */

router.get("/options", brochureOptionsController.getAllBrochureOptions);

/* POST APIs - Add Option Values */
router.post("/fold-styles", (req, res) =>
  brochureOptionsController.addBrochureOptionValue(req, res, "foldStyles"),
);
router.post("/sizes", (req, res) =>
  brochureOptionsController.addBrochureOptionValue(req, res, "sizes"),
);
router.post("/paper-stocks", (req, res) =>
  brochureOptionsController.addBrochureOptionValue(req, res, "paperStocks"),
);
router.post("/finishing-types", (req, res) =>
  brochureOptionsController.addBrochureOptionValue(req, res, "finishingTypes"),
);

/* PUT APIs - Update Option Values */
router.put("/fold-styles/:index", (req, res) =>
  brochureOptionsController.updateBrochureOptionValue(req, res, "foldStyles"),
);
router.put("/sizes/:index", (req, res) =>
  brochureOptionsController.updateBrochureOptionValue(req, res, "sizes"),
);
router.put("/paper-stocks/:index", (req, res) =>
  brochureOptionsController.updateBrochureOptionValue(req, res, "paperStocks"),
);
router.put("/finishing-types/:index", (req, res) =>
  brochureOptionsController.updateBrochureOptionValue(
    req,
    res,
    "finishingTypes",
  ),
);

/* DELETE APIs - Delete Option Values */
router.delete("/fold-styles/:index", (req, res) =>
  brochureOptionsController.deleteBrochureOptionValue(req, res, "foldStyles"),
);
router.delete("/sizes/:index", (req, res) =>
  brochureOptionsController.deleteBrochureOptionValue(req, res, "sizes"),
);
router.delete("/paper-stocks/:index", (req, res) =>
  brochureOptionsController.deleteBrochureOptionValue(req, res, "paperStocks"),
);
router.delete("/finishing-types/:index", (req, res) =>
  brochureOptionsController.deleteBrochureOptionValue(
    req,
    res,
    "finishingTypes",
  ),
);

/* ---------------- Brochure ID-based APIs (must be last) ---------------- */

router.get("/:id", brochureController.getBrochureById);

router.delete("/:id", brochureController.deleteBrochure);

export default router;
