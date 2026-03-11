import mongoose from "mongoose";

const customCardSchema = new mongoose.Schema(
  {
    selectCardTypeAndSize: {
      selectCard: {
        type: String,
        required: true
      },
      size: {
        type: String,
        required: true
      }
    },

    paperAndQuantity: {
      paperStock: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    },

    printingAndFinish: {
      printedSides: {
        type: String,
        required: true
      },
      lamination: {
        type: String
      }
    },

    extras: {
      corners: {
        type: String
      },
      envelopesIncluded: {
        type: String
      }
    },

    additionalNotes: {
      notes: {
        type: String
      }
    },

    customerDetails: {
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      address: {
        type: String
      }
    },

    timeline: {
      orderDate: {
        type: Date,
        default: Date.now
      },
      expectedDate: {
        type: Date
      },
      deliveryDate: {
        type: Date
      }
    },

    files: [
      {
        type: String
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("CustomCard", customCardSchema);