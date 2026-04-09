import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

import connectDB from "./src/config/db.js";

import bookletQuoteRoutes from "./src/routes/booklet.routes.js";
import bookletOptionsRoutes from "./src/routes/bookletOptions.routes.js";
import artbookRoutes from "./src/routes/artbook.routes.js";
import artbookOptionsRoutes from "./src/routes/artbookOptions.routes.js";
import brochureRoutes from "./src/routes/brochure.routes.js";
import brochureOptionsRoutes from "./src/routes/brochureOptions.routes.js";
import businessCardRoutes from "./src/routes/businessCard.routes.js";
import customEnvelopeRoutes from "./src/routes/customEnvelope.routes.js";
import customCardRoutes from "./src/routes/customCard.routes.js";
import magazineRoutes from "./src/routes/magazine.routes.js";
import magazineOptionsRoutes from "./src/routes/magazineOptions.routes.js";
import pamphletRoutes from "./src/routes/pamphlet.routes.js";
import productCatalogueRoutes from "./src/routes/productCatalogue.routes.js";

import notebookRoutes from "./src/routes/notebook.routes.js";
import notebookOptionsRoutes from "./src/routes/notebookOptions.routes.js";
import ledgerRegisterRoutes from "./src/routes/ledgerRegister.routes.js";
import letterheadRoutes from "./src/routes/letterhead.routes.js";
import shoppingBagsRoutes from "./src/routes/shoppingBags.routes.js";

import adminRoutes from "./src/routes/admin.routes.js";

import errorHandler from "./src/middleware/error.middleware.js";

dotenv.config();

const app = express();

/* ---------- CORS ---------- */
app.use(
  cors({
    origin: [
      "https://urasaweb-admin.onrender.com",
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "http://localhost:5176",
      "http://localhost:3000",
      "http://localhost:5000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

/* ---------- Body Parser ---------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- Multer Config ---------- */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* ---------- Root Route ---------- */
app.get("/", (req, res) => {
  res.send("Your Urasa Arts Backend is running");
});

/* ---------- Routes ---------- */

app.use("/api/booklet-quote", upload.array("files", 10), bookletQuoteRoutes);

/* Booklet Options (No upload) */
app.use("/api/booklet-options", bookletOptionsRoutes);

app.use("/api/notebook-quote", upload.array("files", 10), notebookRoutes);

/* Notebook Options (No upload) */
app.use("/api/notebook-options", notebookOptionsRoutes);

app.use(
  "/api/ledger-register",
  upload.array("files", 10),
  ledgerRegisterRoutes,
);

app.use("/api/letterhead", upload.array("files", 10), letterheadRoutes);

app.use("/api/shopping-bags", upload.array("files", 10), shoppingBagsRoutes);

app.use("/api/artbook-quote", upload.array("files", 10), artbookRoutes);

/* Artbook Options (No upload) */
app.use("/api/artbook-options", artbookOptionsRoutes);

app.use("/api/business-card", upload.array("files", 10), businessCardRoutes);

app.use(
  "/api/custom-envelope",
  upload.array("files", 10),
  customEnvelopeRoutes,
);

app.use("/api/custom-card", upload.array("files", 10), customCardRoutes);

app.use("/api/magazines", upload.array("files", 10), magazineRoutes);

/* Magazine Options (No upload) */
app.use("/api/magazine-options", magazineOptionsRoutes);

app.use("/api/brochure-quote", upload.array("files", 10), brochureRoutes);

/* Brochure Options (No upload) */
app.use("/api/brochure-options", brochureOptionsRoutes);

app.use("/api/pamphlet", upload.array("files", 10), pamphletRoutes);

app.use(
  "/api/product-catalogue",
  upload.array("files", 10),
  productCatalogueRoutes,
);

/* Admin routes */
app.use("/api/admin", adminRoutes);

/* ---------- DB ---------- */

connectDB();

/* ---------- Error Handler ---------- */

app.use(errorHandler);

/* ---------- Server ---------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
