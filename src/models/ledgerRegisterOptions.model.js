// import mongoose from "mongoose";

// const ledgerRegisterOptionsSchema = new mongoose.Schema(
// {

//   ledgerSizes:[
//     {
//       type:String,
//       required:true
//     }
//   ],

//   bindingTypes:[
//     {
//       type:String,
//       required:true
//     }
//   ],

//   numberOfPages:[
//     {
//       type:String,
//       required:true
//     }
//   ],

//   pageTypes:[
//     {
//       type:String,
//       required:true
//     }
//   ],

//   rulingPatterns:[
//     {
//       type:String,
//       required:true
//     }
//   ],

//   finishingTypes:[
//     {
//       type:String,
//       required:true
//     }
//   ]

// },
// {timestamps:true}
// );

// export default mongoose.model(
//   "LedgerRegisterOptions",
//   ledgerRegisterOptionsSchema
// );


import mongoose from "mongoose";

const ledgerRegisterOptionsSchema = new mongoose.Schema(
{

  registerSizes:[
    {
      type:String
    }
  ],

  bindingMaterials:[
    {
      type:String
    }
  ],

  numberOfPages:[
    {
      type:String
    }
  ],

  pageTypes:[
    {
      type:String
    }
  ],

  rulingPatterns:[
    {
      type:String
    }
  ],

  finishingTypes:[
    {
      type:String
    }
  ]

},
{timestamps:true}
);

export default mongoose.model(
  "LedgerRegisterOptions",
  ledgerRegisterOptionsSchema
);