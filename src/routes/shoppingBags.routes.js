import express from "express";
const router = express.Router();

import shoppingBagsController from "../controllers/shoppingBags.controller.js";
import shoppingBagsOptionsController from "../controllers/shoppingBagsOptions.controller.js";
import validateShoppingBag from "../validators/shoppingBags.validator.js";

/* ---------------- Shopping Bags Quote CRUD APIs ---------------- */

router.post(
  "/",
  validateShoppingBag,
  shoppingBagsController.createShoppingBagQuote,
);

router.get("/", shoppingBagsController.getAllShoppingBags);

/* ---------------- Shopping Bags Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", shoppingBagsOptionsController.getAllOptions);

// Get options in hierarchical format for dropdowns (for frontend)
router.get(
  "/options/dropdown",
  shoppingBagsOptionsController.getDropdownOptions,
);

/* Category Management (Main Categories) */
router.post("/category", shoppingBagsOptionsController.addCategory);
router.put(
  "/category/:categoryKey",
  shoppingBagsOptionsController.updateCategory,
);
router.delete("/category", shoppingBagsOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  shoppingBagsOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  shoppingBagsOptionsController.deleteSubcategory,
);

/* Update Subcategory Field Configuration */
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/field",
  shoppingBagsOptionsController.updateSubcategoryField,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  shoppingBagsOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  shoppingBagsOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  shoppingBagsOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  shoppingBagsOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  shoppingBagsOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  shoppingBagsOptionsController.deleteCategoryAttribute,
);

/* Shopping Bags by ID - Must be after /options */
router.get("/:id", shoppingBagsController.getShoppingBagById);

router.put("/:id", shoppingBagsController.updateShoppingBag);

router.delete("/:id", shoppingBagsController.deleteShoppingBag);

export default router;
