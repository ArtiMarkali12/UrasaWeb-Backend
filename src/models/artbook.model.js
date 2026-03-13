import mongoose from "mongoose";

const artbookSchema = new mongoose.Schema(
  {
    bookFormatAndBinding: {
      size: {
        type: String,
        required: true
      },
      bindingStyle: {
        type: String,
        required: true
      },
      numberOfPages: {
        type: String,
        required: true
      }
    },

    paperSelection: {
      paperType: {
        type: String,
        required: true
      },
      paperWeight: {
        type: String,
        required: true
      }
    },

    coverAndProfessionalExtras: {
      coverMaterial: [
        {
          type: String
        }
      ],
      features: [
        {
          type: String
        }
      ]
    },

    quantityRequired: {
      type: Number,
      required: true
    },

    artistNotes: {
      type: String
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

export default mongoose.model("Artbook", artbookSchema);