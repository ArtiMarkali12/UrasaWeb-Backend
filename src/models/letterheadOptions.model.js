import mongoose from "mongoose";

const letterheadOptionsSchema = new mongoose.Schema({

  sizeStandards:[
    {type:String}
  ],

  paperTypes:[
    {type:String}
  ],

  paperWeights:[
    {type:String}
  ],

  printColors:[
    {type:String}
  ],

  specialFinishes:[
    {type:String}
  ]

},{timestamps:true});

export default mongoose.model(
  "LetterheadOptions",
  letterheadOptionsSchema
);