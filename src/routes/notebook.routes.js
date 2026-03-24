import express from "express";
const router = express.Router();

import notebookController from "../controllers/notebook.controller.js";
import optionsController from "../controllers/notebookOptions.controller.js";
import validateNotebookQuote from "../validators/notebookQuote.validator.js";

/* ---------------- Notebook Quote CRUD APIs ---------------- */

router.post("/", validateNotebookQuote, notebookController.createNotebookQuote);

router.get("/", notebookController.getAllNotebooks);

/* ---------------- Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", optionsController.getAllOptions);

/* Category Management (Main Categories) */
router.post("/category", optionsController.addCategory);
router.delete("/category", optionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  optionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  optionsController.deleteSubcategory,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  optionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  optionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  optionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  optionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  optionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  optionsController.deleteCategoryAttribute,
);

/* Notebook by ID - Must be after /options */
router.get("/:id", notebookController.getNotebookById);

router.delete("/:id", notebookController.deleteNotebook);

export default router;
