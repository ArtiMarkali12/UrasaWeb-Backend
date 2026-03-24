import mongoose from "mongoose";

const magazineSchema = new mongoose.Schema(
  {
    generalDetails: {
      quantity: {
        type: String,
        required: true,
      },

      bookSize: {
        type: String,
        required: true,
      },

      orientation: {
        type: String,
        enum: ["portrait", "landscape"],
      },
    },

    bindingStyle: {
      bindingType: {
        type: String,
      },

      coverStyle: {
        type: String,
      },

      coverFlaps: {
        type: Boolean,
        default: false,
      },
    },

    interiorSpecifications: {
      numberOfPages: {
        type: Number,
      },

      printColor: {
        type: String,
      },

      paperWeight: {
        type: String,
      },

      paperType: {
        type: String,
      },

      coverFinish: {
        type: String,
      },
    },

    specialFinishing: {
      printFinishing: [
        {
          type: String,
        },
      ],

      pageEdges: {
        type: String,
      },
    },

    packaging: {
      type: String,
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

    status: {
      type: String,
      enum: ["Pending", "Approved", "Completed"],
      default: "Pending",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Magazine", magazineSchema);
