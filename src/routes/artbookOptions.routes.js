import express from "express";
const router = express.Router();

import artbookOptionsController from "../controllers/artbookOptions.controller.js";

/* ---------------- Artbook Options APIs ---------------- */

router.get("/", artbookOptionsController.getAllArtbookOptions);

/* POST APIs - Add Option Values */
router.post("/sizes", (req, res) => artbookOptionsController.addArtbookOptionValue(req, res, "sizes"));
router.post("/binding-styles", (req, res) => artbookOptionsController.addArtbookOptionValue(req, res, "bindingStyles"));
router.post("/number-of-pages", (req, res) => artbookOptionsController.addArtbookOptionValue(req, res, "numberOfPages"));
router.post("/paper-types", (req, res) => artbookOptionsController.addArtbookOptionValue(req, res, "paperTypes"));
router.post("/paper-weights", (req, res) => artbookOptionsController.addArtbookOptionValue(req, res, "paperWeights"));
router.post("/cover-materials", (req, res) => artbookOptionsController.addArtbookOptionValue(req, res, "coverMaterials"));
router.post("/features", (req, res) => artbookOptionsController.addArtbookOptionValue(req, res, "features"));

/* PUT APIs - Update Option Values */
router.put("/sizes/:index", (req, res) => artbookOptionsController.updateArtbookOptionValue(req, res, "sizes"));
router.put("/binding-styles/:index", (req, res) => artbookOptionsController.updateArtbookOptionValue(req, res, "bindingStyles"));
router.put("/number-of-pages/:index", (req, res) => artbookOptionsController.updateArtbookOptionValue(req, res, "numberOfPages"));
router.put("/paper-types/:index", (req, res) => artbookOptionsController.updateArtbookOptionValue(req, res, "paperTypes"));
router.put("/paper-weights/:index", (req, res) => artbookOptionsController.updateArtbookOptionValue(req, res, "paperWeights"));
router.put("/cover-materials/:index", (req, res) => artbookOptionsController.updateArtbookOptionValue(req, res, "coverMaterials"));
router.put("/features/:index", (req, res) => artbookOptionsController.updateArtbookOptionValue(req, res, "features"));

/* DELETE APIs - Delete Option Values */
router.delete("/sizes/:index", (req, res) => artbookOptionsController.deleteArtbookOptionValue(req, res, "sizes"));
router.delete("/binding-styles/:index", (req, res) => artbookOptionsController.deleteArtbookOptionValue(req, res, "bindingStyles"));
router.delete("/number-of-pages/:index", (req, res) => artbookOptionsController.deleteArtbookOptionValue(req, res, "numberOfPages"));
router.delete("/paper-types/:index", (req, res) => artbookOptionsController.deleteArtbookOptionValue(req, res, "paperTypes"));
router.delete("/paper-weights/:index", (req, res) => artbookOptionsController.deleteArtbookOptionValue(req, res, "paperWeights"));
router.delete("/cover-materials/:index", (req, res) => artbookOptionsController.deleteArtbookOptionValue(req, res, "coverMaterials"));
router.delete("/features/:index", (req, res) => artbookOptionsController.deleteArtbookOptionValue(req, res, "features"));

export default router;