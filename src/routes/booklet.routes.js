import express from "express";
const router = express.Router();

import bookletController from "../controllers/booklet.controller.js";
import bookletOptionsController from "../controllers/bookletOptions.controller.js";
import validateBookletQuote from "../validators/bookletQuote.validator.js";

/* ---------------- Booklet Quote CRUD APIs ---------------- */

router.post("/", validateBookletQuote, bookletController.createBookletQuote);

router.get("/", bookletController.getAllQuotes);

/* ---------------- Booklet Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", bookletOptionsController.getAllOptions);

// Get options in hierarchical format for dropdowns (for frontend)
router.get("/options/dropdown", bookletOptionsController.getDropdownOptions);

/* Category Management (Main Categories) */
router.post("/category", bookletOptionsController.addCategory);
router.delete("/category", bookletOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  bookletOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  bookletOptionsController.deleteSubcategory,
);

/* Update Subcategory Field Configuration */
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/field",
  bookletOptionsController.updateSubcategoryField,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  bookletOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  bookletOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  bookletOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  bookletOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  bookletOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  bookletOptionsController.deleteCategoryAttribute,
);

router.get("/:id", bookletController.getBookletById);

router.put("/:id", bookletController.updateBooklet);

router.delete("/:id", bookletController.deleteBooklet);

export default router;
