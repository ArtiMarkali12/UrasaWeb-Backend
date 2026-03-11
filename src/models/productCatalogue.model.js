import mongoose from "mongoose";

const productCatalogueSchema = new mongoose.Schema(
  {
    formatAndBindingStyle: {
      finishedSizeClosed: {
        type: String,
        required: true,
      },
      bindingMethod: {
        type: String,
        required: true,
      },
    },

    paperStockSelection: {
      coverPaperHeavy: {
        type: String,
        required: true,
      },
      innerPagesText: {
        type: String,
        required: true,
      },
      printColor: {
        type: String,
        required: true,
      },
    },

    pageCountAndColor: {
      totalNumberOfPages: {
        type: String,
        required: true,
      },
    },

    coverFinishesAndExtras: {
      type: [
        {
          type: String,
        },
      ],
    },

    quantity: {
      type: Number,
      required: true,
    },

    deadlineOrSpecialInstructions: {
      type: String,
    },

    customerDetails: {
      name: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
      },

      phone: {
        type: String,
        required: true,
      },

      address: {
        type: String,
      },
    },

    timeline: {
      orderDate: {
        type: Date,
        default: Date.now,
      },

      expectedDate: {
        type: Date,
      },

      deliveryDate: {
        type: Date,
      },
    },

    files: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("ProductCatalogue", productCatalogueSchema);
