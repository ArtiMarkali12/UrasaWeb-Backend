import express from "express";
const router = express.Router();

import productCatalogueController from "../controllers/productCatalogue.controller.js";
import productCatalogueOptionsController from "../controllers/productCatalogueOptions.controller.js";
import validateProductCatalogueQuote from "../validators/productCatalogue.validator.js";

/* ---------------- Product Catalogue Quote CRUD APIs ---------------- */

router.post(
  "/",
  validateProductCatalogueQuote,
  productCatalogueController.createProductCatalogueQuote,
);

router.get("/", productCatalogueController.getAllProductCatalogues);

/* ---------------- Product Catalogue Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", productCatalogueOptionsController.getAllOptions);

/* Category Management (Main Categories) */
router.post("/category", productCatalogueOptionsController.addCategory);
router.delete("/category", productCatalogueOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  productCatalogueOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  productCatalogueOptionsController.deleteSubcategory,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  productCatalogueOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  productCatalogueOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  productCatalogueOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  productCatalogueOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  productCatalogueOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  productCatalogueOptionsController.deleteCategoryAttribute,
);

/* Product Catalogue by ID - Must be after /options */
router.get("/:id", productCatalogueController.getProductCatalogueById);

router.put("/:id", productCatalogueController.updateProductCatalogue);

router.delete("/:id", productCatalogueController.deleteProductCatalogue);

export default router;
