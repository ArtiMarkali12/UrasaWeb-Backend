import express from "express";
const router = express.Router();

import notebookController from "../controllers/notebook.controller.js";
import notebookOptionsController from "../controllers/notebookOptions.controller.js";
import validateNotebookQuote from "../validators/notebookQuote.validator.js";

/* ---------------- Notebook Quote CRUD APIs ---------------- */

router.post("/", validateNotebookQuote, notebookController.createNotebookQuote);

router.get("/", notebookController.getAllNotebooks);

/* ---------------- Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", notebookOptionsController.getAllOptions);

// Get options in hierarchical format for dropdowns (for frontend)
router.get("/options/dropdown", notebookOptionsController.getDropdownOptions);

/* Category Management (Main Categories) */
router.post("/category", notebookOptionsController.addCategory);
router.delete("/category", notebookOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  notebookOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  notebookOptionsController.deleteSubcategory,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/field",
  notebookOptionsController.updateSubcategoryField,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  notebookOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  notebookOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  notebookOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  notebookOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  notebookOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  notebookOptionsController.deleteCategoryAttribute,
);

router.get("/:id", notebookController.getNotebookById);

router.put("/:id", notebookController.updateNotebook);

router.delete("/:id", notebookController.deleteNotebook);

export default router;
