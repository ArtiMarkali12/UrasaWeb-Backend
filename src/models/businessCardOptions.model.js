import mongoose from "mongoose";

const businessCardOptionsSchema = new mongoose.Schema(
  {
    cardSizes: [
      {
        type: String,
        required: true
      }
    ],

    paperStocks: [
      {
        type: String,
        required: true
      }
    ],

    paperTextures: [
      {
        type: String,
        required: true
      }
    ],

    printingSides: [
      {
        type: String,
        required: true
      }
    ],

    specialEffects: [
      {
        type: String,
        required: true
      }
    ],

    foilColors: [
      {
        type: String,
        required: true
      }
    ],

    cornerStyles: [
      {
        type: String,
        required: true
      }
    ],

    cornerColors: [
      {
        type: String,
        required: true
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("BusinessCardOptions", businessCardOptionsSchema);