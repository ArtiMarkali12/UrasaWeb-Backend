import mongoose from "mongoose";

const notebookOptionsSchema = new mongoose.Schema(
{

  notebookSizes:[
    {
      type:String,
      required:true
    }
  ],

  bindingStyles:[
    {
      type:String,
      required:true
    }
  ],

  numberOfPages:[
    {
      type:String,
      required:true
    }
  ],

  pageRulings:[
    {
      type:String,
      required:true
    }
  ],

  coverTypes:[
    {
      type:String,
      required:true
    }
  ],

  coverFinishes:[
    {
      type:String,
      required:true
    }
  ]

},
{timestamps:true}
);

export default mongoose.model("NotebookOptions",notebookOptionsSchema);