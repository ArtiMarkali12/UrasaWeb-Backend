import express from "express";
import * as notebookOptionsController from "../controllers/notebookOptions.controller.js";

const router = express.Router();

// Get all options
router.get("/", notebookOptionsController.getAllOptions);

// Add a new category
router.post("/category", notebookOptionsController.addCategory);

// Delete a category
router.delete("/category", notebookOptionsController.deleteCategory);

// Add a subcategory to a category
router.post(
  "/category/:categoryKey/subcategory",
  notebookOptionsController.addSubcategory,
);

// Delete a subcategory from a category
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  notebookOptionsController.deleteSubcategory,
);

// Add an attribute to a subcategory
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  notebookOptionsController.addAttribute,
);

// Update an attribute in a subcategory
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  notebookOptionsController.updateAttribute,
);

// Delete an attribute from a subcategory
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  notebookOptionsController.deleteAttribute,
);

// Category-level attribute routes
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

export default router;
