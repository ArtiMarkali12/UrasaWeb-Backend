import express from "express";
const router = express.Router();

import customCardController from "../controllers/customCard.controller.js";
import customCardOptionsController from "../controllers/customCardOptions.controller.js";
import validateCustomCard from "../validators/customCard.validator.js";

/* ---------------- Custom Card Quote CRUD APIs ---------------- */

router.post("/", validateCustomCard, customCardController.createCustomCard);

router.get("/", customCardController.getAllCustomCards);

/* ---------------- Custom Card Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", customCardOptionsController.getAllOptions);

// Get options in hierarchical format for dropdowns (for frontend)
router.get("/options/dropdown", customCardOptionsController.getDropdownOptions);

/* Category Management (Main Categories) */
router.post("/category", customCardOptionsController.addCategory);
router.put(
  "/category/:categoryKey",
  customCardOptionsController.updateCategory,
);
router.delete("/category", customCardOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  customCardOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  customCardOptionsController.deleteSubcategory,
);

/* Update Subcategory Field Configuration */
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/field",
  customCardOptionsController.updateSubcategoryField,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  customCardOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  customCardOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  customCardOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  customCardOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  customCardOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  customCardOptionsController.deleteCategoryAttribute,
);

/* Card Types Management (Carousel) */
router.get("/card-types", customCardOptionsController.getAllCardTypes);
router.post("/card-types", customCardOptionsController.addCardType);
router.put("/card-types/:index", customCardOptionsController.updateCardType);
router.delete("/card-types/:index", customCardOptionsController.deleteCardType);
router.post(
  "/card-types/reorder",
  customCardOptionsController.reorderCardTypes,
);

/* Custom Card by ID - Must be after /options */
router.get("/:id", customCardController.getCustomCardById);

router.put("/:id", customCardController.updateCustomCard);

router.delete("/:id", customCardController.deleteCustomCard);

export default router;
