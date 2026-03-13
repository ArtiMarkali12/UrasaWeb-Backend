import express from "express";
const router = express.Router();

import pamphletController from "../controllers/pamphlet.controller.js";
import pamphletOptionsController from "../controllers/pamphletOptions.controller.js";
import validatePamphletQuote from "../validators/pamphlet.validator.js";

/* ---------------- Pamphlet CRUD APIs ---------------- */

router.post("/", validatePamphletQuote, pamphletController.createPamphletQuote);

router.get("/", pamphletController.getAllPamphlets);

/* ---------------- Pamphlet Options APIs ---------------- */

router.get("/options", pamphletOptionsController.getAllPamphletOptions);

/* POST APIs - Add Option Values */
router.post("/format-and-folding-styles", (req, res) =>
  pamphletOptionsController.addPamphletOptionValue(
    req,
    res,
    "formatAndFoldingStyles",
  ),
);
router.post("/sizes", (req, res) =>
  pamphletOptionsController.addPamphletOptionValue(req, res, "sizes"),
);
router.post("/paper-weights", (req, res) =>
  pamphletOptionsController.addPamphletOptionValue(req, res, "paperWeights"),
);
router.post("/paper-types", (req, res) =>
  pamphletOptionsController.addPamphletOptionValue(req, res, "paperTypes"),
);
router.post("/printed-sides", (req, res) =>
  pamphletOptionsController.addPamphletOptionValue(req, res, "printedSides"),
);
router.post("/laminations", (req, res) =>
  pamphletOptionsController.addPamphletOptionValue(req, res, "laminations"),
);

/* PUT APIs - Update Option Values */
router.put("/format-and-folding-styles/:index", (req, res) =>
  pamphletOptionsController.updatePamphletOptionValue(
    req,
    res,
    "formatAndFoldingStyles",
  ),
);
router.put("/sizes/:index", (req, res) =>
  pamphletOptionsController.updatePamphletOptionValue(req, res, "sizes"),
);
router.put("/paper-weights/:index", (req, res) =>
  pamphletOptionsController.updatePamphletOptionValue(req, res, "paperWeights"),
);
router.put("/paper-types/:index", (req, res) =>
  pamphletOptionsController.updatePamphletOptionValue(req, res, "paperTypes"),
);
router.put("/printed-sides/:index", (req, res) =>
  pamphletOptionsController.updatePamphletOptionValue(req, res, "printedSides"),
);
router.put("/laminations/:index", (req, res) =>
  pamphletOptionsController.updatePamphletOptionValue(req, res, "laminations"),
);

/* DELETE APIs - Delete Option Values */
router.delete("/format-and-folding-styles/:index", (req, res) =>
  pamphletOptionsController.deletePamphletOptionValue(
    req,
    res,
    "formatAndFoldingStyles",
  ),
);
router.delete("/sizes/:index", (req, res) =>
  pamphletOptionsController.deletePamphletOptionValue(req, res, "sizes"),
);
router.delete("/paper-weights/:index", (req, res) =>
  pamphletOptionsController.deletePamphletOptionValue(req, res, "paperWeights"),
);
router.delete("/paper-types/:index", (req, res) =>
  pamphletOptionsController.deletePamphletOptionValue(req, res, "paperTypes"),
);
router.delete("/printed-sides/:index", (req, res) =>
  pamphletOptionsController.deletePamphletOptionValue(req, res, "printedSides"),
);
router.delete("/laminations/:index", (req, res) =>
  pamphletOptionsController.deletePamphletOptionValue(req, res, "laminations"),
);

/* ---------------- Pamphlet ID-based APIs (must be last) ---------------- */

router.get("/:id", pamphletController.getPamphletById);

router.delete("/:id", pamphletController.deletePamphlet);

export default router;
