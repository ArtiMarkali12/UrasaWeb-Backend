import express from "express";
const router = express.Router();

import pamphletController from "../controllers/pamphlet.controller.js";
import pamphletOptionsController from "../controllers/pamphletOptions.controller.js";
import validatePamphletQuote from "../validators/pamphlet.validator.js";

/* ---------------- Pamphlet Quote CRUD APIs ---------------- */

router.post("/", validatePamphletQuote, pamphletController.createPamphletQuote);

router.get("/", pamphletController.getAllPamphlets);

/* ---------------- Pamphlet Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", pamphletOptionsController.getAllOptions);

/* Category Management (Main Categories) */
router.post("/category", pamphletOptionsController.addCategory);
router.delete("/category", pamphletOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  pamphletOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  pamphletOptionsController.deleteSubcategory,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  pamphletOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  pamphletOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  pamphletOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  pamphletOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  pamphletOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  pamphletOptionsController.deleteCategoryAttribute,
);

/* Pamphlet by ID - Must be after /options */
router.get("/:id", pamphletController.getPamphletById);

router.put("/:id", pamphletController.updatePamphlet);

router.delete("/:id", pamphletController.deletePamphlet);

export default router;
