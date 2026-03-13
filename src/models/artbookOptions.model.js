import mongoose from "mongoose";

const artbookOptionsSchema = new mongoose.Schema(
  {
    sizes: [
      {
        type: String,
        required: true
      }
    ],

    bindingStyles: [
      {
        type: String,
        required: true
      }
    ],

    numberOfPages: [
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

    paperWeights: [
      {
        type: String,
        required: true
      }
    ],

    coverMaterials: [
      {
        type: String,
        required: true
      }
    ],

    features: [
      {
        type: String,
        required: true
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("ArtbookOptions", artbookOptionsSchema);