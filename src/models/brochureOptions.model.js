import mongoose from "mongoose";

const brochureOptionsSchema = new mongoose.Schema(
  {
    foldStyles: [
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

    paperStocks: [
      {
        type: String,
        required: true,
      },
    ],

    finishingTypes: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("BrochureOptions", brochureOptionsSchema);
