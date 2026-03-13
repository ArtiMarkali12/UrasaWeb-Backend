import mongoose from "mongoose";

const productCatalogueOptionsSchema = new mongoose.Schema(
  {
    finishedSizesClosed: [
      {
        type: String,
        required: true,
      },
    ],

    bindingMethods: [
      {
        type: String,
        required: true,
      },
    ],

    coverPapersHeavy: [
      {
        type: String,
        required: true,
      },
    ],

    innerPagesText: [
      {
        type: String,
        required: true,
      },
    ],

    printColors: [
      {
        type: String,
        required: true,
      },
    ],

    totalNumberOfPages: [
      {
        type: String,
        required: true,
      },
    ],

    coverFinishesExtras: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model(
  "ProductCatalogueOptions",
  productCatalogueOptionsSchema,
);
