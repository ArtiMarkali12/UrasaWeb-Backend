import express from "express";
const router = express.Router();

import artbookController from "../controllers/artbook.controller.js";
import artbookOptionsController from "../controllers/artbookOptions.controller.js";
import validateArtbook from "../validators/artbook.validator.js";

/* ---------------- Artbook Quote CRUD APIs ---------------- */

router.post("/", validateArtbook, artbookController.createArtbook);

router.get("/", artbookController.getAllArtbooks);

/* ---------------- Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", artbookOptionsController.getAllArtbookOptions);

// Get options in hierarchical format for dropdowns (for frontend)
router.get("/options/dropdown", artbookOptionsController.getDropdownOptions);

/* Category Management (Main Categories) */
router.post("/category", artbookOptionsController.addCategory);
router.delete("/category", artbookOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  artbookOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  artbookOptionsController.deleteSubcategory,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/field",
  artbookOptionsController.updateSubcategoryField,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  artbookOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  artbookOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  artbookOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  artbookOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  artbookOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  artbookOptionsController.deleteCategoryAttribute,
);

router.get("/:id", artbookController.getArtbookById);

router.put("/:id", artbookController.updateArtbook);

router.delete("/:id", artbookController.deleteArtbook);

export default router;
