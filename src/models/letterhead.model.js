import mongoose from "mongoose";

const letterheadSchema = new mongoose.Schema(
{
  sizePaperStandards:{
    sizeStandard:{
      type:String,
      required:true
    },
    paperType:{
      type:String,
      required:true
    }
  },

  paperWeight:{
    type:String
  },

  printingFinishes:{
    printColor:String,
    specialFinish:[String]
  },

  quantityDetails:{
    quantityRequired:{
      type:Number,
      required:true
    }
  },

  specialInstructions:String,

  customerDetails:{
    name:String,
    email:String,
    phone:String,
    address:String
  },

  timeline:{
    orderDate:{
      type:Date,
      default:Date.now
    },
    expectedDate:Date,
    deliveryDate:Date
  },

  files:[
    {
      type:String
    }
  ]

},
{timestamps:true}
);

export default mongoose.model("Letterhead",letterheadSchema);