import express from "express";
const router = express.Router();

import customEnvelopeController from "../controllers/customEnvelope.controller.js";
import customEnvelopeOptionsController from "../controllers/customEnvelopeOptions.controller.js";
import validateCustomEnvelope from "../validators/customEnvelope.validator.js";

/* ---------------- Custom Envelope Quote CRUD APIs ---------------- */

router.post(
  "/",
  validateCustomEnvelope,
  customEnvelopeController.createCustomEnvelope,
);

router.get("/", customEnvelopeController.getAllCustomEnvelopes);

/* ---------------- Custom Envelope Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", customEnvelopeOptionsController.getAllOptions);

/* Category Management (Main Categories) */
router.post("/category", customEnvelopeOptionsController.addCategory);
router.delete("/category", customEnvelopeOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  customEnvelopeOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  customEnvelopeOptionsController.deleteSubcategory,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  customEnvelopeOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  customEnvelopeOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  customEnvelopeOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  customEnvelopeOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  customEnvelopeOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  customEnvelopeOptionsController.deleteCategoryAttribute,
);

/* Custom Envelope by ID - Must be after /options */
router.get("/:id", customEnvelopeController.getCustomEnvelopeById);

router.put("/:id", customEnvelopeController.updateCustomEnvelope);

router.delete("/:id", customEnvelopeController.deleteCustomEnvelope);

export default router;
