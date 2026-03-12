// import express from "express";

// const router = express.Router();

// import letterheadController from "../controllers/letterhead.controller.js";
// import optionsController from "../controllers/letterheadOptions.controller.js";
// import validateLetterheadQuote from "../validators/letterheadQuote.validator.js";

// /* Letterhead Quote */

// router.post("/",validateLetterheadQuote,letterheadController.createLetterheadQuote);

// router.get("/",letterheadController.getAllLetterheads);

// /* Options */

// router.get("/options",optionsController.getAllOptions);

// router.post("/size-standards",(req,res)=>
// optionsController.addOptionValue(req,res,"sizeStandards")
// );

// router.post("/paper-types",(req,res)=>
// optionsController.addOptionValue(req,res,"paperTypes")
// );

// router.post("/paper-weights",(req,res)=>
// optionsController.addOptionValue(req,res,"paperWeights")
// );

// router.post("/print-colors",(req,res)=>
// optionsController.addOptionValue(req,res,"printColors")
// );

// router.post("/special-finishes",(req,res)=>
// optionsController.addOptionValue(req,res,"specialFinishes")
// );

// /* By ID */

// router.get("/:id",letterheadController.getLetterheadById);

// router.delete("/:id",letterheadController.deleteLetterhead);

// export default router;




import express from "express";

const router = express.Router();

import letterheadController from "../controllers/letterhead.controller.js";
import optionsController from "../controllers/letterheadOptions.controller.js";
import validateLetterheadQuote from "../validators/letterheadQuote.validator.js";

/* Letterhead Quote */

router.post("/",validateLetterheadQuote,letterheadController.createLetterheadQuote);

router.get("/",letterheadController.getAllLetterheads);

/* Options */

router.get("/options",optionsController.getAllOptions);

/* POST */

router.post("/size-standards",(req,res)=>
optionsController.addOptionValue(req,res,"sizeStandards")
);

router.post("/paper-types",(req,res)=>
optionsController.addOptionValue(req,res,"paperTypes")
);

router.post("/paper-weights",(req,res)=>
optionsController.addOptionValue(req,res,"paperWeights")
);

router.post("/print-colors",(req,res)=>
optionsController.addOptionValue(req,res,"printColors")
);

router.post("/special-finishes",(req,res)=>
optionsController.addOptionValue(req,res,"specialFinishes")
);

/* PUT */

router.put("/size-standards/:index",(req,res)=>
optionsController.updateOptionValue(req,res,"sizeStandards")
);

router.put("/paper-types/:index",(req,res)=>
optionsController.updateOptionValue(req,res,"paperTypes")
);

router.put("/paper-weights/:index",(req,res)=>
optionsController.updateOptionValue(req,res,"paperWeights")
);

router.put("/print-colors/:index",(req,res)=>
optionsController.updateOptionValue(req,res,"printColors")
);

router.put("/special-finishes/:index",(req,res)=>
optionsController.updateOptionValue(req,res,"specialFinishes")
);

/* DELETE */

router.delete("/size-standards/:index",(req,res)=>
optionsController.deleteOptionValue(req,res,"sizeStandards")
);

router.delete("/paper-types/:index",(req,res)=>
optionsController.deleteOptionValue(req,res,"paperTypes")
);

router.delete("/paper-weights/:index",(req,res)=>
optionsController.deleteOptionValue(req,res,"paperWeights")
);

router.delete("/print-colors/:index",(req,res)=>
optionsController.deleteOptionValue(req,res,"printColors")
);

router.delete("/special-finishes/:index",(req,res)=>
optionsController.deleteOptionValue(req,res,"specialFinishes")
);

/* By ID */

router.get("/:id",letterheadController.getLetterheadById);

router.delete("/:id",letterheadController.deleteLetterhead);

export default router;