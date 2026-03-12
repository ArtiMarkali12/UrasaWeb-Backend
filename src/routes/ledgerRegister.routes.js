import express from "express";

const router = express.Router();

import ledgerController from "../controllers/ledgerRegister.controller.js";
import optionsController from "../controllers/ledgerRegisterOptions.controller.js";
import validateLedgerRegister from "../validators/ledgerRegisterQuote.validator.js";

/* Ledger Quote */

router.post("/",validateLedgerRegister,ledgerController.createLedgerRegisterQuote);

router.get("/",ledgerController.getAllLedgerRegisters);

/* Options */

router.get("/options",optionsController.getAllOptions);

/* POST */

// router.post("/ledger-sizes",(req,res)=>
//   optionsController.addOptionValue(req,res,"ledgerSizes")
// );

// router.post("/binding-types",(req,res)=>
//   optionsController.addOptionValue(req,res,"bindingTypes")
// );

router.post("/register-sizes",(req,res)=>
  optionsController.addOptionValue(req,res,"registerSizes")
);

router.post("/binding-materials",(req,res)=>
  optionsController.addOptionValue(req,res,"bindingMaterials")
);

router.post("/number-of-pages",(req,res)=>
  optionsController.addOptionValue(req,res,"numberOfPages")
);

router.post("/page-types",(req,res)=>
  optionsController.addOptionValue(req,res,"pageTypes")
);

router.post("/ruling-patterns",(req,res)=>
  optionsController.addOptionValue(req,res,"rulingPatterns")
);

router.post("/finishing-types",(req,res)=>
  optionsController.addOptionValue(req,res,"finishingTypes")
);

/* PUT */

// router.put("/ledger-sizes/:index",(req,res)=>
//   optionsController.updateOptionValue(req,res,"ledgerSizes")
// );

// router.put("/binding-types/:index",(req,res)=>
//   optionsController.updateOptionValue(req,res,"bindingTypes")
// );

router.put("/register-sizes/:index",(req,res)=>
  optionsController.updateOptionValue(req,res,"registerSizes")
);

router.put("/binding-materials/:index",(req,res)=>
  optionsController.updateOptionValue(req,res,"bindingMaterials")
);

router.put("/number-of-pages/:index",(req,res)=>
  optionsController.updateOptionValue(req,res,"numberOfPages")
);

router.put("/page-types/:index",(req,res)=>
  optionsController.updateOptionValue(req,res,"pageTypes")
);

router.put("/ruling-patterns/:index",(req,res)=>
  optionsController.updateOptionValue(req,res,"rulingPatterns")
);

router.put("/finishing-types/:index",(req,res)=>
  optionsController.updateOptionValue(req,res,"finishingTypes")
);

/* DELETE */

// router.delete("/ledger-sizes/:index",(req,res)=>
//   optionsController.deleteOptionValue(req,res,"ledgerSizes")
// );

// router.delete("/binding-types/:index",(req,res)=>
//   optionsController.deleteOptionValue(req,res,"bindingTypes")
// );


router.delete("/register-sizes/:index",(req,res)=>
  optionsController.deleteOptionValue(req,res,"registerSizes")
);

router.delete("/binding-materials/:index",(req,res)=>
  optionsController.deleteOptionValue(req,res,"bindingMaterials")
);

router.delete("/number-of-pages/:index",(req,res)=>
  optionsController.deleteOptionValue(req,res,"numberOfPages")
);

router.delete("/page-types/:index",(req,res)=>
  optionsController.deleteOptionValue(req,res,"pageTypes")
);

router.delete("/ruling-patterns/:index",(req,res)=>
  optionsController.deleteOptionValue(req,res,"rulingPatterns")
);

router.delete("/finishing-types/:index",(req,res)=>
  optionsController.deleteOptionValue(req,res,"finishingTypes")
);

/* Ledger by ID */

router.get("/:id",ledgerController.getLedgerRegisterById);

router.delete("/:id",ledgerController.deleteLedgerRegister);

export default router;