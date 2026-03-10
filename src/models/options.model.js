import mongoose from "mongoose";

const optionsSchema = new mongoose.Schema(
  {
    bookSizes: [
      {
        type: String,
        required: true
      }
    ],

    bindingTypes: [
      {
        type: String,
        required: true
      }
    ],

    coverStyles: [
      {
        type: String,
        required: true
      }
    ],

    printColors: [
      {
        type: String,
        required: true
      }
    ],

    paperWeights: [
      {
        type: String,
        required: true
      }
    ],

    paperTypes: [
      {
        type: String,
        required: true
      }
    ],

    coverFinishes: [
      {
        type: String,
        required: true
      }
    ],

    pageEdges: [
      {
        type: String,
        required: true
      }
    ],

    packaging: [
      {
        type: String,
        required: true
      }
    ],

    specialFinishing: [
      {
        type: String,
        required: true
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Options", optionsSchema);