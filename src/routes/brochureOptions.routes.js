import express from "express";
const router = express.Router();

import brochureOptionsController from "../controllers/brochureOptions.controller.js";

/* ---------------- Brochure Options APIs ---------------- */

router.get("/", brochureOptionsController.getAllBrochureOptions);

/* Category Management (Main Categories) */
router.post("/category", brochureOptionsController.addCategory);
router.delete("/category", brochureOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  brochureOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  brochureOptionsController.deleteSubcategory,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  brochureOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  brochureOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  brochureOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  brochureOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  brochureOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  brochureOptionsController.deleteCategoryAttribute,
);

export default router;
