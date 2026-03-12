import mongoose from "mongoose";

const shoppingBagsOptionsSchema = new mongoose.Schema({

  bagTypes:[{type:String}],

  standardSizes:[{type:String}],

  printColors:[{type:String}],

  finishingTypes:[{type:String}]

},{timestamps:true});

export default mongoose.model(
"ShoppingBagsOptions",
shoppingBagsOptionsSchema
);