import express from "express";
import * as bookletOptionsController from "../controllers/bookletOptions.controller.js";

const router = express.Router();

// Get all options (original format)
router.get("/", bookletOptionsController.getAllOptions);

// Get options in hierarchical format for dropdowns
router.get("/dropdown", bookletOptionsController.getDropdownOptions);

// Add a new category
router.post("/category", bookletOptionsController.addCategory);

// Update a category
router.put("/category/:categoryKey", bookletOptionsController.updateCategory);

// Delete a category
router.delete("/category", bookletOptionsController.deleteCategory);

// Add a subcategory to a category
router.post(
  "/category/:categoryKey/subcategory",
  bookletOptionsController.addSubcategory,
);

// Update a subcategory
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  bookletOptionsController.updateSubcategoryField,
);

// Delete a subcategory from a category
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  bookletOptionsController.deleteSubcategory,
);

// Add an attribute to a subcategory
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  bookletOptionsController.addAttribute,
);

// Update an attribute in a subcategory
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  bookletOptionsController.updateAttribute,
);

// Delete an attribute from a subcategory
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  bookletOptionsController.deleteAttribute,
);

// Category-level attribute routes
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

export default router;
