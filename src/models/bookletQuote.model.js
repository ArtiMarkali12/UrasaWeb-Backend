// import mongoose from "mongoose";

// const bookletQuoteSchema = new mongoose.Schema(
// {
//   generalDetails: {
//     quantity: {
//       type: Number,
//       required: true
//     },

//     bookSize: {
//       type: String,
//       required: true,
//       enum: ["A4", "A5", "A6", "Custom"]
//     },

//     orientation: {
//       type: String,
//       enum: ["Portrait", "Landscape"],
//       required: true
//     }
//   },

//   bindingStyle: {
//     bindingType: {
//       type: String,
//       enum: [
//         "Perfect Bound",
//         "Saddle Stitch",
//         "Wire-O Binding",
//         "Hard Cover"
//       ],
//       required: true
//     },

//     coverStyle: {
//       type: String,
//       enum: ["Softcover", "Hardcover"],
//       required: true
//     },

//     coverFlaps: {
//       type: Boolean,
//       default: false
//     }
//   },

//   interiorSpecifications: {
//     numberOfPages: {
//       type: Number,
//       required: true
//     },

//     printColor: {
//       type: String,
//       enum: ["Full Color", "B/W"],
//       required: true
//     },

//     paperWeight: {
//       type: String,
//       enum: ["70-80gsm", "90-100gsm", "120gsm"]
//     },

//     paperType: {
//       type: String,
//       enum: [
//         "Uncoated",
//         "Coated Gloss",
//         "Coated Matte",
//         "Cream"
//       ]
//     },

//     coverFinish: {
//       type: String,
//       enum: ["Glossy", "Matte", "Soft Touch"]
//     }
//   },

//   specialFinishing: [
//     {
//       type: String,
//       enum: [
//         "Spot UV",
//         "Foil Stamping",
//         "Embossing",
//         "Debossing"
//       ]
//     }
//   ],

//   pageEdges: {
//     type: String,
//     enum: ["Square Cut", "Rounded Corners"]
//   },

//   packaging: {
//     type: String,
//     enum: ["Bulk Packed", "Individual Shrink Wrap"]
//   },

//   additionalNotes: {
//     type: String
//   }

// },
// { timestamps: true }
// );

// export default mongoose.model("BookletQuote", bookletQuoteSchema);


import mongoose from "mongoose";

const bookletQuoteSchema = new mongoose.Schema(
{
  generalDetails: {
    quantity: {
      type: Number,
      required: true
    },

    bookSize: {
      type: String,   // ✅ enum काढला, आता dynamic value देऊ शकतो
      required: true
    },

    orientation: {
      type: String,
      enum: ["Portrait", "Landscape"],
      required: true
    }
  },

  bindingStyle: {
    bindingType: {
      type: String,
      enum: [
        "Perfect Bound",
        "Saddle Stitch",
        "Wire-O Binding",
        "Hard Cover"
      ],
      required: true
    },

    coverStyle: {
      type: String,
      enum: ["Softcover", "Hardcover"],
      required: true
    },

    coverFlaps: {
      type: Boolean,
      default: false
    }
  },

  interiorSpecifications: {
    numberOfPages: {
      type: Number,
      required: true
    },

    printColor: {
      type: String,
      enum: ["Full Color", "B/W"],
      required: true
    },

    paperWeight: {
      type: String,
      enum: ["70-80gsm", "90-100gsm", "120gsm"]
    },

    paperType: {
      type: String,
      enum: [
        "Uncoated",
        "Coated Gloss",
        "Coated Matte",
        "Cream"
      ]
    },

    coverFinish: {
      type: String,
      enum: ["Glossy", "Matte", "Soft Touch"]
    }
  },

  specialFinishing: [
    {
      type: String,
      enum: [
        "Spot UV",
        "Foil Stamping",
        "Embossing",
        "Debossing"
      ]
    }
  ],

  pageEdges: {
    type: String,
    enum: ["Square Cut", "Rounded Corners"]
  },

  packaging: {
    type: String,
    enum: ["Bulk Packed", "Individual Shrink Wrap"]
  },

  additionalNotes: {
    type: String
  }

},
{ timestamps: true }
);

export default mongoose.model("BookletQuote", bookletQuoteSchema);


















