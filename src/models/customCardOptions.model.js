import mongoose from "mongoose";

const customCardOptionsSchema = new mongoose.Schema(
  {
    cardTypes: [
      {
        type: String,
        required: true
      }
    ],

    sizes: [
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

    printedSides: [
      {
        type: String,
        required: true
      }
    ],

    laminations: [
      {
        type: String,
        required: true
      }
    ],

    corners: [
      {
        type: String,
        required: true
      }
    ],

    envelopes: [
      {
        type: String,
        required: true
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("CustomCardOptions", customCardOptionsSchema);