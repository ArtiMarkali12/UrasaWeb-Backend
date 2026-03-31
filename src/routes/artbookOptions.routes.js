import express from "express";
const router = express.Router();

import artbookOptionsController from "../controllers/artbookOptions.controller.js";

/* ---------------- Artbook Options APIs ---------------- */

router.get("/", artbookOptionsController.getAllArtbookOptions);

/* Category Management (Main Categories) */
router.post("/category", artbookOptionsController.addCategory);
router.delete("/category", artbookOptionsController.deleteCategory);
router.put("/category/:categoryKey", artbookOptionsController.updateCategory);

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

export default router;
