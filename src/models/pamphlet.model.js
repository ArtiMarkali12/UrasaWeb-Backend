import mongoose from "mongoose";

const pamphletSchema = new mongoose.Schema(
  {
    formatAndFoldingStyle: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      required: true,
    },

    paperStock: {
      paperWeight: {
        type: String,
        required: true,
      },
      paperType: {
        type: String,
        required: true,
      },
    },

    printingAndFinishes: {
      printedSides: {
        type: String,
        required: true,
      },
      lamination: [
        {
          type: String,
        },
      ],
    },

    quantity: {
      type: Number,
      required: true,
    },

    targetDeadline: {
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

    status: {
      type: String,
      enum: ["Pending", "Approved", "Completed"],
      default: "Pending",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Pamphlet", pamphletSchema);
