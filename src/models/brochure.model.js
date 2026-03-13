import mongoose from "mongoose";

const brochureSchema = new mongoose.Schema(
  {
    foldStyle: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      required: true,
    },

    paperStock: {
      type: String,
      required: true,
    },

    finishing: [
      {
        type: String,
      },
    ],

    quantity: {
      type: Number,
      required: true,
    },

    additionalNotes: {
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

export default mongoose.model("Brochure", brochureSchema);
