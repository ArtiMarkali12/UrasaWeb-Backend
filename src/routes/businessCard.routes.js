import express from "express";
const router = express.Router();

import businessCardController from "../controllers/businessCard.controller.js";
import businessCardOptionsController from "../controllers/businessCardOptions.controller.js";
import validateBusinessCard from "../validators/businessCard.validator.js";

/* ---------------- Business Card Quote CRUD APIs ---------------- */

router.post(
  "/",
  validateBusinessCard,
  businessCardController.createBusinessCard,
);

router.get("/", businessCardController.getAllBusinessCards);

/* ---------------- Business Card Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", businessCardOptionsController.getAllBusinessCardOptions);

/* Category Management (Main Categories) */
router.post("/category", businessCardOptionsController.addCategory);
router.delete("/category", businessCardOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  businessCardOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  businessCardOptionsController.deleteSubcategory,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  businessCardOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  businessCardOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  businessCardOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  businessCardOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  businessCardOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  businessCardOptionsController.deleteCategoryAttribute,
);

/* Business Card by ID - Must be after /options */
router.get("/:id", businessCardController.getBusinessCardById);

router.delete("/:id", businessCardController.deleteBusinessCard);

export default router;
