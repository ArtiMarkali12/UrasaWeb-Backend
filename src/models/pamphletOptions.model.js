import mongoose from "mongoose";

const pamphletOptionsSchema = new mongoose.Schema(
  {
    formatAndFoldingStyles: [
      {
        type: String,
        required: true,
      },
    ],

    sizes: [
      {
        type: String,
        required: true,
      },
    ],

    paperWeights: [
      {
        type: String,
        required: true,
      },
    ],

    paperTypes: [
      {
        type: String,
        required: true,
      },
    ],

    printedSides: [
      {
        type: String,
        required: true,
      },
    ],

    laminations: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("PamphletOptions", pamphletOptionsSchema);
