// import mongoose from "mongoose";

// const ledgerRegisterSchema = new mongoose.Schema(
// {
//   registerDetails:{

//     ledgerSize:{
//       type:String,
//       required:true
//     },

//     bindingType:{
//       type:String
//     }

//   },

//   interiorPages:{

//     numberOfPages:{
//       type:String
//     },

//     pageType:{
//       type:String
//     },

//     rulingPattern:{
//       type:String
//     },

//     finishingType:{
//       type:String
//     }

//   },

//   quantity:{
//     type:Number,
//     required:true
//   },

//   notes:{
//     additionalInstructions:{
//       type:String
//     }
//   },

//   customerDetails:{

//     name:{
//       type:String,
//       required:true
//     },

//     email:{
//       type:String,
//       required:true
//     },

//     phone:{
//       type:String,
//       required:true
//     },

//     address:{
//       type:String
//     }

//   },

//   timeline:{

//     orderDate:{
//       type:Date,
//       default:Date.now
//     },

//     expectedDate:{
//       type:Date
//     },

//     deliveryDate:{
//       type:Date
//     }

//   },

//   files:[
//     {
//       type:String
//     }
//   ]

// },
// {timestamps:true}
// );

// export default mongoose.model("LedgerRegister",ledgerRegisterSchema);



import mongoose from "mongoose";

const ledgerRegisterSchema = new mongoose.Schema(
{
  registerDetails:{

    size:{
      type:String,
      required:true
    },

    bindingMaterial:{
      type:String
    }

  },

  interiorPageSpecification:{

    numberOfPages:{
      type:String
    },

    pageType:{
      type:String
    },

    rulingPattern:{
      type:String
    }

  },

  finishingProfessionalExtras:{

    type:[
      {
        type:String
      }
    ]

  },

  quantity:{
    type:Number,
    required:true
  },

  additionalNotes:{
    type:String
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

export default mongoose.model("LedgerRegister",ledgerRegisterSchema);