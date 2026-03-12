import express from "express";

const router = express.Router();

import shoppingController from "../controllers/shoppingBags.controller.js";
import optionsController from "../controllers/shoppingBagsOptions.controller.js";

/* Quote */

router.post("/",shoppingController.createShoppingBagQuote);

router.get("/",shoppingController.getAllShoppingBags);

/* Options */

router.get("/options",optionsController.getAllOptions);

/* POST */

router.post("/bag-types",(req,res)=>
optionsController.addOptionValue(req,res,"bagTypes")
);

router.post("/standard-sizes",(req,res)=>
optionsController.addOptionValue(req,res,"standardSizes")
);

router.post("/print-colors",(req,res)=>
optionsController.addOptionValue(req,res,"printColors")
);

router.post("/finishing-types",(req,res)=>
optionsController.addOptionValue(req,res,"finishingTypes")
);

/* PUT */

router.put("/bag-types/:index",(req,res)=>
optionsController.updateOptionValue(req,res,"bagTypes")
);

router.put("/standard-sizes/:index",(req,res)=>
optionsController.updateOptionValue(req,res,"standardSizes")
);

router.put("/print-colors/:index",(req,res)=>
optionsController.updateOptionValue(req,res,"printColors")
);

router.put("/finishing-types/:index",(req,res)=>
optionsController.updateOptionValue(req,res,"finishingTypes")
);

/* DELETE */

router.delete("/bag-types/:index",(req,res)=>
optionsController.deleteOptionValue(req,res,"bagTypes")
);

router.delete("/standard-sizes/:index",(req,res)=>
optionsController.deleteOptionValue(req,res,"standardSizes")
);

router.delete("/print-colors/:index",(req,res)=>
optionsController.deleteOptionValue(req,res,"printColors")
);

router.delete("/finishing-types/:index",(req,res)=>
optionsController.deleteOptionValue(req,res,"finishingTypes")
);

/* By ID */

router.get("/:id",shoppingController.getShoppingBagById);

router.delete("/:id",shoppingController.deleteShoppingBag);

export default router;