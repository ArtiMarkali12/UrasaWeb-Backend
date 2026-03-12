


// import express from "express";

// const router = express.Router();

// import notebookController from "../controllers/notebook.controller.js";
// import optionsController from "../controllers/notebookOptions.controller.js";
// import validateNotebookQuote from "../validators/notebookQuote.validator.js";

// /* Notebook Quote */

// router.post("/",validateNotebookQuote,notebookController.createNotebookQuote);

// router.get("/",notebookController.getAllNotebooks);

// /* Notebook Options */

// router.get("/options",optionsController.getAllOptions);

// router.post("/notebook-sizes",(req,res)=>
//   optionsController.addOptionValue(req,res,"notebookSizes")
// );

// router.post("/binding-styles",(req,res)=>
//   optionsController.addOptionValue(req,res,"bindingStyles")
// );

// router.post("/page-rulings",(req,res)=>
//   optionsController.addOptionValue(req,res,"pageRulings")
// );
// router.post("/number-of-pages",(req,res)=>
//   optionsController.addOptionValue(req,res,"numberOfPages")
// );
// router.post("/cover-types",(req,res)=>
//   optionsController.addOptionValue(req,res,"coverTypes")
// );

// router.post("/cover-finishes",(req,res)=>
//   optionsController.addOptionValue(req,res,"coverFinishes")
// );


// /* Notebook by ID */

// router.get("/:id",notebookController.getNotebookById);

// router.delete("/:id",notebookController.deleteNotebook);

// export default router;





// import express from "express";

// const router = express.Router();

// import notebookController from "../controllers/notebook.controller.js";
// import optionsController from "../controllers/notebookOptions.controller.js";
// import validateNotebookQuote from "../validators/notebookQuote.validator.js";

// /* Notebook Quote */

// router.post("/",validateNotebookQuote,notebookController.createNotebookQuote);

// router.get("/",notebookController.getAllNotebooks);

// /* Notebook Options */

// router.get("/options",optionsController.getAllOptions);

// /* POST - Add Option */

// router.post("/notebook-sizes",(req,res)=>
//   optionsController.addOptionValue(req,res,"notebookSizes")
// );

// router.post("/binding-styles",(req,res)=>
//   optionsController.addOptionValue(req,res,"bindingStyles")
// );

// router.post("/page-rulings",(req,res)=>
//   optionsController.addOptionValue(req,res,"pageRulings")
// );

// router.post("/number-of-pages",(req,res)=>
//   optionsController.addOptionValue(req,res,"numberOfPages")
// );

// router.post("/cover-types",(req,res)=>
//   optionsController.addOptionValue(req,res,"coverTypes")
// );

// router.post("/cover-finishes",(req,res)=>
//   optionsController.addOptionValue(req,res,"coverFinishes")
// );

// /* PUT - Update Option */

// router.put("/notebook-sizes",(req,res)=>
//   optionsController.updateOptionValue(req,res,"notebookSizes")
// );

// router.put("/binding-styles",(req,res)=>
//   optionsController.updateOptionValue(req,res,"bindingStyles")
// );

// router.put("/page-rulings",(req,res)=>
//   optionsController.updateOptionValue(req,res,"pageRulings")
// );

// router.put("/number-of-pages",(req,res)=>
//   optionsController.updateOptionValue(req,res,"numberOfPages")
// );

// router.put("/cover-types",(req,res)=>
//   optionsController.updateOptionValue(req,res,"coverTypes")
// );

// router.put("/cover-finishes",(req,res)=>
//   optionsController.updateOptionValue(req,res,"coverFinishes")
// );

// /* DELETE - Remove Option */

// router.delete("/notebook-sizes",(req,res)=>
//   optionsController.deleteOptionValue(req,res,"notebookSizes")
// );

// router.delete("/binding-styles",(req,res)=>
//   optionsController.deleteOptionValue(req,res,"bindingStyles")
// );

// router.delete("/page-rulings",(req,res)=>
//   optionsController.deleteOptionValue(req,res,"pageRulings")
// );

// router.delete("/number-of-pages",(req,res)=>
//   optionsController.deleteOptionValue(req,res,"numberOfPages")
// );

// router.delete("/cover-types",(req,res)=>
//   optionsController.deleteOptionValue(req,res,"coverTypes")
// );

// router.delete("/cover-finishes",(req,res)=>
//   optionsController.deleteOptionValue(req,res,"coverFinishes")
// );

// /* Notebook by ID */

// router.get("/:id",notebookController.getNotebookById);

// router.delete("/:id",notebookController.deleteNotebook);

// export default router;



import express from "express";

const router = express.Router();

import notebookController from "../controllers/notebook.controller.js";
import optionsController from "../controllers/notebookOptions.controller.js";
import validateNotebookQuote from "../validators/notebookQuote.validator.js";

/* Notebook Quote */

router.post("/", validateNotebookQuote, notebookController.createNotebookQuote);

router.get("/", notebookController.getAllNotebooks);

/* Notebook Options */

router.get("/options", optionsController.getAllOptions);

/* POST - Add Option */

router.post("/notebook-sizes", (req,res)=>
  optionsController.addOptionValue(req,res,"notebookSizes")
);

router.post("/binding-styles", (req,res)=>
  optionsController.addOptionValue(req,res,"bindingStyles")
);

router.post("/page-rulings", (req,res)=>
  optionsController.addOptionValue(req,res,"pageRulings")
);

router.post("/number-of-pages", (req,res)=>
  optionsController.addOptionValue(req,res,"numberOfPages")
);

router.post("/cover-types", (req,res)=>
  optionsController.addOptionValue(req,res,"coverTypes")
);

router.post("/cover-finishes", (req,res)=>
  optionsController.addOptionValue(req,res,"coverFinishes")
);

/* PUT - Update Option */

router.put("/notebook-sizes/:index",(req,res)=>
  optionsController.updateOptionValue(req,res,"notebookSizes")
);

router.put("/binding-styles/:index",(req,res)=>
  optionsController.updateOptionValue(req,res,"bindingStyles")
);

router.put("/page-rulings/:index",(req,res)=>
  optionsController.updateOptionValue(req,res,"pageRulings")
);

router.put("/number-of-pages/:index",(req,res)=>
  optionsController.updateOptionValue(req,res,"numberOfPages")
);

router.put("/cover-types/:index",(req,res)=>
  optionsController.updateOptionValue(req,res,"coverTypes")
);

router.put("/cover-finishes/:index",(req,res)=>
  optionsController.updateOptionValue(req,res,"coverFinishes")
);

/* DELETE - Remove Option */

router.delete("/notebook-sizes/:index",(req,res)=>
  optionsController.deleteOptionValue(req,res,"notebookSizes")
);

router.delete("/binding-styles/:index",(req,res)=>
  optionsController.deleteOptionValue(req,res,"bindingStyles")
);

router.delete("/page-rulings/:index",(req,res)=>
  optionsController.deleteOptionValue(req,res,"pageRulings")
);

router.delete("/number-of-pages/:index",(req,res)=>
  optionsController.deleteOptionValue(req,res,"numberOfPages")
);

router.delete("/cover-types/:index",(req,res)=>
  optionsController.deleteOptionValue(req,res,"coverTypes")
);

router.delete("/cover-finishes/:index",(req,res)=>
  optionsController.deleteOptionValue(req,res,"coverFinishes")
);

/* Notebook by ID */

router.get("/:id", notebookController.getNotebookById);

router.delete("/:id", notebookController.deleteNotebook);

export default router;