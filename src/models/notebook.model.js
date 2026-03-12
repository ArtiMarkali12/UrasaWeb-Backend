import mongoose from "mongoose";

const notebookSchema = new mongoose.Schema(
{
  notebookDetails:{

    size:{
      type:String,
      required:true
    },

    bindingStyle:{
      type:String
    }

  },

  interiorPages:{

    numberOfPages:{
      type:String
    },

    pageRuling:{
      type:String
    },

    coverTypes:{
      type:String
    },

    coverFinish:{
      type:String
    }

  },

  quantity:{
    type:Number,
    required:true
  },

  notes:{
    additionalInstructions:{
      type:String
    }
  },

  customerDetails:{

    name:{
      type:String,
      required:true
    },

    email:{
      type:String,
      required:true
    },

    phone:{
      type:String,
      required:true
    },

    address:{
      type:String
    }

  },

  timeline:{

    orderDate:{
      type:Date,
      default:Date.now
    },

    expectedDate:{
      type:Date
    },

    deliveryDate:{
      type:Date
    }

  },

  files:[
    {
      type:String
    }
  ]

},
{timestamps:true}
);

export default mongoose.model("Notebook",notebookSchema);