import mongoose from "mongoose";

const customEnvelopeOptionsSchema = new mongoose.Schema(
  {
    sizes: [
      {
        type: String,
        required: true
      }
    ],

    paperMaterials: [
      {
        type: String,
        required: true
      }
    ],

    gsmWeights: [
      {
        type: String,
        required: true
      }
    ],

    sealTypes: [
      {
        type: String,
        required: true
      }
    ],

    windowOptions: [
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
    ]
  },
  { timestamps: true }
);

export default mongoose.model("CustomEnvelopeOptions", customEnvelopeOptionsSchema);