import mongoose from "mongoose";

const bookletOptionSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      unique: true,
      enum: [
        "bookSizes",
        "orientations",
        "bindingTypes",
        "coverStyles",
        "printColors",
        "paperWeights",
        "paperTypes",
        "coverFinishes",
        "pageEdges",
        "packaging",
        "specialFinishing"
      ]
    },
    values: {
      type: [String],
      required: true,
      default: []
    }
  },
  { timestamps: true }
);

const BookletOption = mongoose.model("BookletOption", bookletOptionSchema);

export default BookletOption;
