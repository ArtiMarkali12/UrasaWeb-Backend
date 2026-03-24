import mongoose from "mongoose";

const businessCardSchema = new mongoose.Schema(
  {
    basicsAndDimensions: {
      projectName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      numberOfDifferentNames: {
        type: Number,
        required: true,
      },
      cardSize: {
        type: String,
        required: true,
      },
      orientation: {
        type: String,
        enum: ["portrait", "landscape"],
        required: true,
      },
    },

    cuttingAndEdges: {
      paperTexture: {
        type: String,
      },
    },

    paperAndMaterial: {
      paperStock: {
        type: String,
        required: true,
      },
      paperTexture: {
        type: String,
      },
      printingSides: {
        type: String,
        required: true,
      },
    },

    laminationAndCoating: {
      premiumFinishes: {
        specialEffects: [
          {
            type: String,
          },
        ],
        foilColor: {
          type: String,
        },
      },
    },

    cornerStyle: {
      type: {
        type: String,
      },
      color: {
        type: String,
      },
    },

    uploadAndNotes: {
      comments: {
        type: String,
      },
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

export default mongoose.model("BusinessCard", businessCardSchema);
