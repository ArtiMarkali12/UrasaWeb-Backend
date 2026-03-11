import mongoose from "mongoose";

const customEnvelopeSchema = new mongoose.Schema(
  {
    sizeStandard: {
      size: {
        type: String,
        required: true
      }
    },

    paperTypeAndWeight: {
      paperMaterial: {
        type: String,
        required: true
      },
      gsmWeight: {
        type: String,
        required: true
      }
    },

    styleAndFeatures: {
      sealType: {
        type: String,
        required: true
      },
      windowOptions: [
        {
          type: String
        }
      ]
    },

    printingAndQuantity: {
      printColors: {
        type: String,
        required: true
      },
      quantityRequired: {
        type: Number,
        required: true
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

export default mongoose.model("CustomEnvelope", customEnvelopeSchema);