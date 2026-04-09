import mongoose from "mongoose";

const bookletSchema = new mongoose.Schema(
  {
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

    orderType: {
      type: String,
      enum: [
        "Saddle Booklet",
        "Coffee Table Book",
        "Perfect Bound Booklet",
        "Spiral/Comb Coil Booklet",
        "Hard Cover Booklet",
      ],
      required: true,
    },

    // Additional size specifications from frontend carousel
    sizeSpecifications: {
      selectedSize: {
        type: String,
      },
      // Width in inches (for both preset and custom sizes)
      widthInches: {
        type: String,
      },
      // Height in inches (for both preset and custom sizes)
      heightInches: {
        type: String,
      },
      // Additional custom size info
      additionalInfo: {
        type: String,
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

      country: {
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

export default mongoose.model("Booklet", bookletSchema);
