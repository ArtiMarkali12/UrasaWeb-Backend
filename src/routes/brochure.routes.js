import express from "express";
const router = express.Router();

import brochureController from "../controllers/brochure.controller.js";
import brochureOptionsController from "../controllers/brochureOptions.controller.js";
import validateBrochureQuote from "../validators/brochure.validator.js";

/* ---------------- Brochure Quote CRUD APIs ---------------- */

router.post("/", validateBrochureQuote, brochureController.createBrochureQuote);

router.get("/", brochureController.getAllBrochures);

/* ---------------- Brochure Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", brochureOptionsController.getAllBrochureOptions);

/* Category Management (Main Categories) */
router.post("/category", brochureOptionsController.addCategory);
router.delete("/category", brochureOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  brochureOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  brochureOptionsController.deleteSubcategory,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  brochureOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  brochureOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  brochureOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  brochureOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  brochureOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  brochureOptionsController.deleteCategoryAttribute,
);

/* ---------------- Brochure ID-based APIs (must be last) ---------------- */

router.get("/:id", brochureController.getBrochureById);

router.delete("/:id", brochureController.deleteBrochure);

export default router;
