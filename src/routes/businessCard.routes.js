import express from "express";
const router = express.Router();

import businessCardController from "../controllers/businessCard.controller.js";
import businessCardOptionsController from "../controllers/businessCardOptions.controller.js";
import validateBusinessCard from "../validators/businessCard.validator.js";

/* ---------------- Business Card CRUD APIs ---------------- */

router.post("/", validateBusinessCard, businessCardController.createBusinessCard);

router.get("/", businessCardController.getAllBusinessCards);

/* ---------------- Business Card Options APIs ---------------- */

router.get("/options", businessCardOptionsController.getAllBusinessCardOptions);

/* POST APIs - Add Option Values */
router.post("/card-sizes", (req, res) => businessCardOptionsController.addBusinessCardOptionValue(req, res, "cardSizes"));
router.post("/paper-stocks", (req, res) => businessCardOptionsController.addBusinessCardOptionValue(req, res, "paperStocks"));
router.post("/paper-textures", (req, res) => businessCardOptionsController.addBusinessCardOptionValue(req, res, "paperTextures"));
router.post("/printing-sides", (req, res) => businessCardOptionsController.addBusinessCardOptionValue(req, res, "printingSides"));
router.post("/special-effects", (req, res) => businessCardOptionsController.addBusinessCardOptionValue(req, res, "specialEffects"));
router.post("/foil-colors", (req, res) => businessCardOptionsController.addBusinessCardOptionValue(req, res, "foilColors"));
router.post("/corner-styles", (req, res) => businessCardOptionsController.addBusinessCardOptionValue(req, res, "cornerStyles"));
router.post("/corner-colors", (req, res) => businessCardOptionsController.addBusinessCardOptionValue(req, res, "cornerColors"));

/* PUT APIs - Update Option Values */
router.put("/card-sizes/:index", (req, res) => businessCardOptionsController.updateBusinessCardOptionValue(req, res, "cardSizes"));
router.put("/paper-stocks/:index", (req, res) => businessCardOptionsController.updateBusinessCardOptionValue(req, res, "paperStocks"));
router.put("/paper-textures/:index", (req, res) => businessCardOptionsController.updateBusinessCardOptionValue(req, res, "paperTextures"));
router.put("/printing-sides/:index", (req, res) => businessCardOptionsController.updateBusinessCardOptionValue(req, res, "printingSides"));
router.put("/special-effects/:index", (req, res) => businessCardOptionsController.updateBusinessCardOptionValue(req, res, "specialEffects"));
router.put("/foil-colors/:index", (req, res) => businessCardOptionsController.updateBusinessCardOptionValue(req, res, "foilColors"));
router.put("/corner-styles/:index", (req, res) => businessCardOptionsController.updateBusinessCardOptionValue(req, res, "cornerStyles"));
router.put("/corner-colors/:index", (req, res) => businessCardOptionsController.updateBusinessCardOptionValue(req, res, "cornerColors"));

/* DELETE APIs - Delete Option Values */
router.delete("/card-sizes/:index", (req, res) => businessCardOptionsController.deleteBusinessCardOptionValue(req, res, "cardSizes"));
router.delete("/paper-stocks/:index", (req, res) => businessCardOptionsController.deleteBusinessCardOptionValue(req, res, "paperStocks"));
router.delete("/paper-textures/:index", (req, res) => businessCardOptionsController.deleteBusinessCardOptionValue(req, res, "paperTextures"));
router.delete("/printing-sides/:index", (req, res) => businessCardOptionsController.deleteBusinessCardOptionValue(req, res, "printingSides"));
router.delete("/special-effects/:index", (req, res) => businessCardOptionsController.deleteBusinessCardOptionValue(req, res, "specialEffects"));
router.delete("/foil-colors/:index", (req, res) => businessCardOptionsController.deleteBusinessCardOptionValue(req, res, "foilColors"));
router.delete("/corner-styles/:index", (req, res) => businessCardOptionsController.deleteBusinessCardOptionValue(req, res, "cornerStyles"));
router.delete("/corner-colors/:index", (req, res) => businessCardOptionsController.deleteBusinessCardOptionValue(req, res, "cornerColors"));

/* ---------------- Business Card ID-based APIs (must be last) ---------------- */

router.get("/:id", businessCardController.getBusinessCardById);

router.delete("/:id", businessCardController.deleteBusinessCard);

export default router;