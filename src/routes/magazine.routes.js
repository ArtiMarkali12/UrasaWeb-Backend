import express from "express";
const router = express.Router();

import magazineController from "../controllers/magazine.controller.js";
import magazineOptionsController from "../controllers/magazineOptions.controller.js";

/* -------- Magazine Quote APIs -------- */

router.post("/", magazineController.createMagazineQuote);

router.get("/", magazineController.getAllQuotes);

/* -------- Magazine Options APIs -------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", magazineOptionsController.getAllOptions);

/* Category Management (Main Categories) */
router.post("/category", magazineOptionsController.addCategory);
router.delete("/category", magazineOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  magazineOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  magazineOptionsController.deleteSubcategory,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  magazineOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  magazineOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  magazineOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  magazineOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  magazineOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  magazineOptionsController.deleteCategoryAttribute,
);

/* Magazine by ID - Must be after /options */
router.get("/:id", magazineController.getMagazineById);

router.put("/:id", magazineController.updateMagazine);

router.delete("/:id", magazineController.deleteMagazine);

export default router;
