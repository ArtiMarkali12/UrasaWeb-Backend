import express from "express";
const router = express.Router();

import customEnvelopeController from "../controllers/customEnvelope.controller.js";
import customEnvelopeOptionsController from "../controllers/customEnvelopeOptions.controller.js";
import validateCustomEnvelope from "../validators/customEnvelope.validator.js";

/* ---------------- Custom Envelope CRUD APIs ---------------- */

router.post("/", validateCustomEnvelope, customEnvelopeController.createCustomEnvelope);

router.get("/", customEnvelopeController.getAllCustomEnvelopes);

/* ---------------- Custom Envelope Options APIs ---------------- */

router.get("/options", customEnvelopeOptionsController.getAllCustomEnvelopeOptions);

/* POST APIs - Add Option Values */
router.post("/sizes", (req, res) => customEnvelopeOptionsController.addCustomEnvelopeOptionValue(req, res, "sizes"));
router.post("/paper-materials", (req, res) => customEnvelopeOptionsController.addCustomEnvelopeOptionValue(req, res, "paperMaterials"));
router.post("/gsm-weights", (req, res) => customEnvelopeOptionsController.addCustomEnvelopeOptionValue(req, res, "gsmWeights"));
router.post("/seal-types", (req, res) => customEnvelopeOptionsController.addCustomEnvelopeOptionValue(req, res, "sealTypes"));
router.post("/window-options", (req, res) => customEnvelopeOptionsController.addCustomEnvelopeOptionValue(req, res, "windowOptions"));
router.post("/print-colors", (req, res) => customEnvelopeOptionsController.addCustomEnvelopeOptionValue(req, res, "printColors"));

/* PUT APIs - Update Option Values */
router.put("/sizes/:index", (req, res) => customEnvelopeOptionsController.updateCustomEnvelopeOptionValue(req, res, "sizes"));
router.put("/paper-materials/:index", (req, res) => customEnvelopeOptionsController.updateCustomEnvelopeOptionValue(req, res, "paperMaterials"));
router.put("/gsm-weights/:index", (req, res) => customEnvelopeOptionsController.updateCustomEnvelopeOptionValue(req, res, "gsmWeights"));
router.put("/seal-types/:index", (req, res) => customEnvelopeOptionsController.updateCustomEnvelopeOptionValue(req, res, "sealTypes"));
router.put("/window-options/:index", (req, res) => customEnvelopeOptionsController.updateCustomEnvelopeOptionValue(req, res, "windowOptions"));
router.put("/print-colors/:index", (req, res) => customEnvelopeOptionsController.updateCustomEnvelopeOptionValue(req, res, "printColors"));

/* DELETE APIs - Delete Option Values */
router.delete("/sizes/:index", (req, res) => customEnvelopeOptionsController.deleteCustomEnvelopeOptionValue(req, res, "sizes"));
router.delete("/paper-materials/:index", (req, res) => customEnvelopeOptionsController.deleteCustomEnvelopeOptionValue(req, res, "paperMaterials"));
router.delete("/gsm-weights/:index", (req, res) => customEnvelopeOptionsController.deleteCustomEnvelopeOptionValue(req, res, "gsmWeights"));
router.delete("/seal-types/:index", (req, res) => customEnvelopeOptionsController.deleteCustomEnvelopeOptionValue(req, res, "sealTypes"));
router.delete("/window-options/:index", (req, res) => customEnvelopeOptionsController.deleteCustomEnvelopeOptionValue(req, res, "windowOptions"));
router.delete("/print-colors/:index", (req, res) => customEnvelopeOptionsController.deleteCustomEnvelopeOptionValue(req, res, "printColors"));

/* ---------------- Custom Envelope ID-based APIs (must be last) ---------------- */

router.get("/:id", customEnvelopeController.getCustomEnvelopeById);

router.delete("/:id", customEnvelopeController.deleteCustomEnvelope);

export default router;