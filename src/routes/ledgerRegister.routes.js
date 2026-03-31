import express from "express";
const router = express.Router();

import ledgerRegisterController from "../controllers/ledgerRegister.controller.js";
import ledgerRegisterOptionsController from "../controllers/ledgerRegisterOptions.controller.js";
import validateLedgerRegister from "../validators/ledgerRegisterQuote.validator.js";

/* ---------------- Ledger Register Quote CRUD APIs ---------------- */

router.post(
  "/",
  validateLedgerRegister,
  ledgerRegisterController.createLedgerRegisterQuote,
);

router.get("/", ledgerRegisterController.getAllLedgerRegisters);

/* ---------------- Ledger Register Options APIs ---------------- */
/* IMPORTANT: /options must be before /:id or it will be caught by /:id */

router.get("/options", ledgerRegisterOptionsController.getAllOptions);

// Get options in hierarchical format for dropdowns (for frontend)
router.get(
  "/options/dropdown",
  ledgerRegisterOptionsController.getDropdownOptions,
);

/* Category Management (Main Categories) */
router.post("/category", ledgerRegisterOptionsController.addCategory);
router.put(
  "/category/:categoryKey",
  ledgerRegisterOptionsController.updateCategory,
);
router.delete("/category", ledgerRegisterOptionsController.deleteCategory);

/* Subcategory Management */
router.post(
  "/category/:categoryKey/subcategory",
  ledgerRegisterOptionsController.addSubcategory,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey",
  ledgerRegisterOptionsController.deleteSubcategory,
);

/* Update Subcategory Field Configuration */
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/field",
  ledgerRegisterOptionsController.updateSubcategoryField,
);

/* Attribute Management */
router.post(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute",
  ledgerRegisterOptionsController.addAttribute,
);
router.put(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  ledgerRegisterOptionsController.updateAttribute,
);
router.delete(
  "/category/:categoryKey/subcategory/:subcategoryKey/attribute/:index",
  ledgerRegisterOptionsController.deleteAttribute,
);

/* Category-level Attribute Management */
router.post(
  "/category/:categoryKey/attribute",
  ledgerRegisterOptionsController.addCategoryAttribute,
);
router.put(
  "/category/:categoryKey/attribute/:index",
  ledgerRegisterOptionsController.updateCategoryAttribute,
);
router.delete(
  "/category/:categoryKey/attribute/:index",
  ledgerRegisterOptionsController.deleteCategoryAttribute,
);

/* Ledger Register by ID - Must be after /options */
router.get("/:id", ledgerRegisterController.getLedgerRegisterById);

router.put("/:id", ledgerRegisterController.updateLedgerRegister);

router.delete("/:id", ledgerRegisterController.deleteLedgerRegister);

export default router;
