import express from "express";
const router = express.Router();

import bookletController from "../controllers/booklet.controller.js";
import optionsController from "../controllers/options.controller.js";
import validateBookletQuote from "../validators/bookletQuote.validator.js";

/* ---------------- Booklet Quote CRUD APIs ---------------- */

router.post("/", validateBookletQuote, bookletController.createBookletQuote);

router.get("/", bookletController.getAllQuotes);

/* ---------------- Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", optionsController.getAllOptions);

/* Category Management (Main Categories) */
router.post("/category", optionsController.addCategory);
router.delete("/category", optionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  optionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  optionsController.deleteSubcategory,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  optionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  optionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  optionsController.deleteAttribute,
);

router.get("/:id", bookletController.getBookletById);

router.put("/:id", bookletController.updateBooklet);

router.delete("/:id", bookletController.deleteBooklet);

export default router;
