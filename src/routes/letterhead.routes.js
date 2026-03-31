import express from "express";
const router = express.Router();

import letterheadController from "../controllers/letterhead.controller.js";
import letterheadOptionsController from "../controllers/letterheadOptions.controller.js";
import validateLetterheadQuote from "../validators/letterheadQuote.validator.js";

/* ---------------- Letterhead Quote CRUD APIs ---------------- */

router.post(
  "/",
  validateLetterheadQuote,
  letterheadController.createLetterheadQuote,
);

router.get("/", letterheadController.getAllLetterheads);

/* ---------------- Letterhead Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", letterheadOptionsController.getAllOptions);

// Get options in hierarchical format for dropdowns (for frontend)
router.get("/options/dropdown", letterheadOptionsController.getDropdownOptions);

/* Category Management (Main Categories) */
router.post("/category", letterheadOptionsController.addCategory);
router.put(
  "/category/:categoryKey",
  letterheadOptionsController.updateCategory,
);
router.delete("/category", letterheadOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  letterheadOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  letterheadOptionsController.deleteSubcategory,
);

/* Update Subcategory Field Configuration */
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/field",
  letterheadOptionsController.updateSubcategoryField,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  letterheadOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  letterheadOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  letterheadOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  letterheadOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  letterheadOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  letterheadOptionsController.deleteCategoryAttribute,
);

/* Letterhead by ID - Must be after /options */
router.get("/:id", letterheadController.getLetterheadById);

router.put("/:id", letterheadController.updateLetterhead);

router.delete("/:id", letterheadController.deleteLetterhead);

export default router;
