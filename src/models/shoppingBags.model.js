import mongoose from "mongoose";

const shoppingBagsSchema = new mongoose.Schema(
  {
    bagTypeMaterial: {
      bagType: {
        type: String,
        required: true,
      },
      paperThickness: {
        type: String,
      },
    },

    sizeDimensions: {
      standardSize: String,
      customWidth: Number,
      height: Number,
      gusset: String,
    },

    handleStyle: {
      type: String,
    },

    printingFinishes: {
      printColor: String,
      finishing: [String],
    },

    quantity: {
      type: Number,
      required: true,
    },

    specialInstructions: String,

    customerDetails: {
      name: String,
      email: String,
      phone: String,
      address: String,
    },

    timeline: {
      orderDate: {
        type: Date,
        default: Date.now,
      },
      expectedDate: Date,
      deliveryDate: Date,
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

export default mongoose.model("ShoppingBags", shoppingBagsSchema);
