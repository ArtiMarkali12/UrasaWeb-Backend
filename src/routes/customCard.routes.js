import express from "express";
const router = express.Router();

import customCardController from "../controllers/customCard.controller.js";
import customCardOptionsController from "../controllers/customCardOptions.controller.js";
import validateCustomCard from "../validators/customCard.validator.js";

/* ---------------- Custom Card CRUD APIs ---------------- */

router.post("/", validateCustomCard, customCardController.createCustomCard);

router.get("/", customCardController.getAllCustomCards);

/* ---------------- Custom Card Options APIs ---------------- */

router.get("/options", customCardOptionsController.getAllCustomCardOptions);

/* POST APIs - Add Option Values */
router.post("/card-types", (req, res) => customCardOptionsController.addCustomCardOptionValue(req, res, "cardTypes"));
router.post("/sizes", (req, res) => customCardOptionsController.addCustomCardOptionValue(req, res, "sizes"));
router.post("/paper-stocks", (req, res) => customCardOptionsController.addCustomCardOptionValue(req, res, "paperStocks"));
router.post("/printed-sides", (req, res) => customCardOptionsController.addCustomCardOptionValue(req, res, "printedSides"));
router.post("/laminations", (req, res) => customCardOptionsController.addCustomCardOptionValue(req, res, "laminations"));
router.post("/corners", (req, res) => customCardOptionsController.addCustomCardOptionValue(req, res, "corners"));
router.post("/envelopes", (req, res) => customCardOptionsController.addCustomCardOptionValue(req, res, "envelopes"));

/* PUT APIs - Update Option Values */
router.put("/card-types/:index", (req, res) => customCardOptionsController.updateCustomCardOptionValue(req, res, "cardTypes"));
router.put("/sizes/:index", (req, res) => customCardOptionsController.updateCustomCardOptionValue(req, res, "sizes"));
router.put("/paper-stocks/:index", (req, res) => customCardOptionsController.updateCustomCardOptionValue(req, res, "paperStocks"));
router.put("/printed-sides/:index", (req, res) => customCardOptionsController.updateCustomCardOptionValue(req, res, "printedSides"));
router.put("/laminations/:index", (req, res) => customCardOptionsController.updateCustomCardOptionValue(req, res, "laminations"));
router.put("/corners/:index", (req, res) => customCardOptionsController.updateCustomCardOptionValue(req, res, "corners"));
router.put("/envelopes/:index", (req, res) => customCardOptionsController.updateCustomCardOptionValue(req, res, "envelopes"));

/* DELETE APIs - Delete Option Values */
router.delete("/card-types/:index", (req, res) => customCardOptionsController.deleteCustomCardOptionValue(req, res, "cardTypes"));
router.delete("/sizes/:index", (req, res) => customCardOptionsController.deleteCustomCardOptionValue(req, res, "sizes"));
router.delete("/paper-stocks/:index", (req, res) => customCardOptionsController.deleteCustomCardOptionValue(req, res, "paperStocks"));
router.delete("/printed-sides/:index", (req, res) => customCardOptionsController.deleteCustomCardOptionValue(req, res, "printedSides"));
router.delete("/laminations/:index", (req, res) => customCardOptionsController.deleteCustomCardOptionValue(req, res, "laminations"));
router.delete("/corners/:index", (req, res) => customCardOptionsController.deleteCustomCardOptionValue(req, res, "corners"));
router.delete("/envelopes/:index", (req, res) => customCardOptionsController.deleteCustomCardOptionValue(req, res, "envelopes"));

/* ---------------- Custom Card ID-based APIs (must be last) ---------------- */

router.get("/:id", customCardController.getCustomCardById);

router.delete("/:id", customCardController.deleteCustomCard);

export default router;