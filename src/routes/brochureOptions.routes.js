import express from "express";
const router = express.Router();

import brochureOptionsController from "../controllers/brochureOptions.controller.js";

/* ---------------- Brochure Options APIs ---------------- */

router.get("/", brochureOptionsController.getAllBrochureOptions);

// Get options in hierarchical format for dropdowns (for frontend)
router.get("/options/dropdown", brochureOptionsController.getDropdownOptions);

/* Category Management (Main Categories) */
router.post("/category", brochureOptionsController.addCategory);
router.put("/category/:categoryKey", brochureOptionsController.updateCategory);
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

/* Update Subcategory Field Configuration */
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/field",
  brochureOptionsController.updateSubcategoryField,
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

export default router;
