import express from "express";
const router = express.Router();

import magazineOptionsController from "../controllers/magazineOptions.controller.js";

/* -------- Get All Options -------- */

router.get("/", magazineOptionsController.getAllOptions);

/* -------- Add Options -------- */

router.post("/sizes", (req, res) =>
  magazineOptionsController.addOptionValue(req, res, "magazineSizes")
);

router.post("/binding-types", (req, res) =>
  magazineOptionsController.addOptionValue(req, res, "bindingTypes")
);

router.post("/cover-styles", (req, res) =>
  magazineOptionsController.addOptionValue(req, res, "coverStyles")
);

router.post("/print-colors", (req, res) =>
  magazineOptionsController.addOptionValue(req, res, "printColors")
);

router.post("/paper-weights", (req, res) =>
  magazineOptionsController.addOptionValue(req, res, "paperWeights")
);

router.post("/paper-types", (req, res) =>
  magazineOptionsController.addOptionValue(req, res, "paperTypes")
);

router.post("/cover-finishes", (req, res) =>
  magazineOptionsController.addOptionValue(req, res, "coverFinishes")
);

router.post("/page-edges", (req, res) =>
  magazineOptionsController.addOptionValue(req, res, "pageEdges")
);

router.post("/packaging", (req, res) =>
  magazineOptionsController.addOptionValue(req, res, "packaging")
);

router.post("/special-finishing", (req, res) =>
  magazineOptionsController.addOptionValue(req, res, "specialFinishing")
);





/* -------- UPDATE APIs -------- */

router.put("/sizes/:index", (req, res) =>
  magazineOptionsController.updateOptionValue(req, res, "magazineSizes")
);

router.put("/binding-types/:index", (req, res) =>
  magazineOptionsController.updateOptionValue(req, res, "bindingTypes")
);

router.put("/cover-styles/:index", (req, res) =>
  magazineOptionsController.updateOptionValue(req, res, "coverStyles")
);

router.put("/print-colors/:index", (req, res) =>
  magazineOptionsController.updateOptionValue(req, res, "printColors")
);

router.put("/paper-weights/:index", (req, res) =>
  magazineOptionsController.updateOptionValue(req, res, "paperWeights")
);

router.put("/paper-types/:index", (req, res) =>
  magazineOptionsController.updateOptionValue(req, res, "paperTypes")
);

router.put("/cover-finishes/:index", (req, res) =>
  magazineOptionsController.updateOptionValue(req, res, "coverFinishes")
);

router.put("/page-edges/:index", (req, res) =>
  magazineOptionsController.updateOptionValue(req, res, "pageEdges")
);

router.put("/packaging/:index", (req, res) =>
  magazineOptionsController.updateOptionValue(req, res, "packaging")
);

router.put("/special-finishing/:index", (req, res) =>
  magazineOptionsController.updateOptionValue(req, res, "specialFinishing")
);





/* -------- DELETE APIs -------- */

router.delete("/sizes/:index", (req, res) =>
  magazineOptionsController.deleteOptionValue(req, res, "magazineSizes")
);

router.delete("/binding-types/:index", (req, res) =>
  magazineOptionsController.deleteOptionValue(req, res, "bindingTypes")
);

router.delete("/cover-styles/:index", (req, res) =>
  magazineOptionsController.deleteOptionValue(req, res, "coverStyles")
);

router.delete("/print-colors/:index", (req, res) =>
  magazineOptionsController.deleteOptionValue(req, res, "printColors")
);

router.delete("/paper-weights/:index", (req, res) =>
  magazineOptionsController.deleteOptionValue(req, res, "paperWeights")
);

router.delete("/paper-types/:index", (req, res) =>
  magazineOptionsController.deleteOptionValue(req, res, "paperTypes")
);

router.delete("/cover-finishes/:index", (req, res) =>
  magazineOptionsController.deleteOptionValue(req, res, "coverFinishes")
);

router.delete("/page-edges/:index", (req, res) =>
  magazineOptionsController.deleteOptionValue(req, res, "pageEdges")
);

router.delete("/packaging/:index", (req, res) =>
  magazineOptionsController.deleteOptionValue(req, res, "packaging")
);

router.delete("/special-finishing/:index", (req, res) =>
  magazineOptionsController.deleteOptionValue(req, res, "specialFinishing")
);

export default router;