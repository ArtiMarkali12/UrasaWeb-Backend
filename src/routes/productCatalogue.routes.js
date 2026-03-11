import express from "express";
const router = express.Router();

import productCatalogueController from "../controllers/productCatalogue.controller.js";
import productCatalogueOptionsController from "../controllers/productCatalogueOptions.controller.js";
import validateProductCatalogueQuote from "../validators/productCatalogue.validator.js";

/* ---------------- Product Catalogue CRUD APIs ---------------- */

router.post(
  "/",
  validateProductCatalogueQuote,
  productCatalogueController.createProductCatalogueQuote,
);

router.get("/", productCatalogueController.getAllProductCatalogues);

/* ---------------- Product Catalogue Options APIs ---------------- */

router.get(
  "/options",
  productCatalogueOptionsController.getAllProductCatalogueOptions,
);

/* POST APIs - Add Option Values */
router.post("/finished-sizes-closed", (req, res) =>
  productCatalogueOptionsController.addProductCatalogueOptionValue(
    req,
    res,
    "finishedSizesClosed",
  ),
);
router.post("/binding-methods", (req, res) =>
  productCatalogueOptionsController.addProductCatalogueOptionValue(
    req,
    res,
    "bindingMethods",
  ),
);
router.post("/cover-papers-heavy", (req, res) =>
  productCatalogueOptionsController.addProductCatalogueOptionValue(
    req,
    res,
    "coverPapersHeavy",
  ),
);
router.post("/inner-pages-text", (req, res) =>
  productCatalogueOptionsController.addProductCatalogueOptionValue(
    req,
    res,
    "innerPagesText",
  ),
);
router.post("/print-colors", (req, res) =>
  productCatalogueOptionsController.addProductCatalogueOptionValue(
    req,
    res,
    "printColors",
  ),
);
router.post("/total-number-of-pages", (req, res) =>
  productCatalogueOptionsController.addProductCatalogueOptionValue(
    req,
    res,
    "totalNumberOfPages",
  ),
);
router.post("/cover-finishes-extras", (req, res) =>
  productCatalogueOptionsController.addProductCatalogueOptionValue(
    req,
    res,
    "coverFinishesExtras",
  ),
);

/* PUT APIs - Update Option Values */
router.put("/finished-sizes-closed/:index", (req, res) =>
  productCatalogueOptionsController.updateProductCatalogueOptionValue(
    req,
    res,
    "finishedSizesClosed",
  ),
);
router.put("/binding-methods/:index", (req, res) =>
  productCatalogueOptionsController.updateProductCatalogueOptionValue(
    req,
    res,
    "bindingMethods",
  ),
);
router.put("/cover-papers-heavy/:index", (req, res) =>
  productCatalogueOptionsController.updateProductCatalogueOptionValue(
    req,
    res,
    "coverPapersHeavy",
  ),
);
router.put("/inner-pages-text/:index", (req, res) =>
  productCatalogueOptionsController.updateProductCatalogueOptionValue(
    req,
    res,
    "innerPagesText",
  ),
);
router.put("/print-colors/:index", (req, res) =>
  productCatalogueOptionsController.updateProductCatalogueOptionValue(
    req,
    res,
    "printColors",
  ),
);
router.put("/total-number-of-pages/:index", (req, res) =>
  productCatalogueOptionsController.updateProductCatalogueOptionValue(
    req,
    res,
    "totalNumberOfPages",
  ),
);
router.put("/cover-finishes-extras/:index", (req, res) =>
  productCatalogueOptionsController.updateProductCatalogueOptionValue(
    req,
    res,
    "coverFinishesExtras",
  ),
);

/* DELETE APIs - Delete Option Values */
router.delete("/finished-sizes-closed/:index", (req, res) =>
  productCatalogueOptionsController.deleteProductCatalogueOptionValue(
    req,
    res,
    "finishedSizesClosed",
  ),
);
router.delete("/binding-methods/:index", (req, res) =>
  productCatalogueOptionsController.deleteProductCatalogueOptionValue(
    req,
    res,
    "bindingMethods",
  ),
);
router.delete("/cover-papers-heavy/:index", (req, res) =>
  productCatalogueOptionsController.deleteProductCatalogueOptionValue(
    req,
    res,
    "coverPapersHeavy",
  ),
);
router.delete("/inner-pages-text/:index", (req, res) =>
  productCatalogueOptionsController.deleteProductCatalogueOptionValue(
    req,
    res,
    "innerPagesText",
  ),
);
router.delete("/print-colors/:index", (req, res) =>
  productCatalogueOptionsController.deleteProductCatalogueOptionValue(
    req,
    res,
    "printColors",
  ),
);
router.delete("/total-number-of-pages/:index", (req, res) =>
  productCatalogueOptionsController.deleteProductCatalogueOptionValue(
    req,
    res,
    "totalNumberOfPages",
  ),
);
router.delete("/cover-finishes-extras/:index", (req, res) =>
  productCatalogueOptionsController.deleteProductCatalogueOptionValue(
    req,
    res,
    "coverFinishesExtras",
  ),
);

/* ---------------- Product Catalogue ID-based APIs (must be last) ---------------- */

router.get("/:id", productCatalogueController.getProductCatalogueById);

router.delete("/:id", productCatalogueController.deleteProductCatalogue);

export default router;
