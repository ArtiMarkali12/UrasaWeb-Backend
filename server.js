import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

import connectDB from "./src/config/db.js";

import bookletQuoteRoutes from "./src/routes/booklet.routes.js";
import artbookRoutes from "./src/routes/artbook.routes.js";
import businessCardRoutes from "./src/routes/businessCard.routes.js";
import customEnvelopeRoutes from "./src/routes/customEnvelope.routes.js";
import customCardRoutes from "./src/routes/customCard.routes.js";
import magazineRoutes from "./src/routes/magazine.routes.js";
import magazineOptionsRoutes from "./src/routes/magazineOptions.routes.js";
import brochureRoutes from "./src/routes/brochure.routes.js";
import pamphletRoutes from "./src/routes/pamphlet.routes.js";
import productCatalogueRoutes from "./src/routes/productCatalogue.routes.js";

import notebookRoutes from "./src/routes/notebook.routes.js";
import ledgerRegisterRoutes from "./src/routes/ledgerRegister.routes.js";
import letterheadRoutes from "./src/routes/letterhead.routes.js";
import shoppingBagsRoutes from "./src/routes/shoppingBags.routes.js";

import adminRoutes from "./src/routes/admin.routes.js";

import errorHandler from "./src/middleware/error.middleware.js";

dotenv.config();

const app = express();

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

/* ---------- Middleware ---------- */

app.use(cors());
app.use(express.json());

/* ---------- Routes ---------- */

app.use("/api/booklet-quote", upload.array("files", 10), bookletQuoteRoutes);

app.use("/api/notebook-quote", upload.array("files", 10), notebookRoutes);

app.use(
  "/api/ledger-register",
  upload.array("files", 10),
  ledgerRegisterRoutes
);

app.use(
  "/api/letterhead",
  upload.array("files", 10),
  letterheadRoutes
);

app.use("/api/shopping-bags", upload.array("files", 10), shoppingBagsRoutes);

app.use("/api/artbook", upload.array("files", 10), artbookRoutes);

app.use("/api/business-card", upload.array("files", 10), businessCardRoutes);

app.use(
  "/api/custom-envelope",
  upload.array("files", 10),
  customEnvelopeRoutes
);

app.use("/api/custom-card", upload.array("files", 10), customCardRoutes);

app.use("/api/magazines", upload.array("files", 10), magazineRoutes);

/* Magazine Options (No upload) */
app.use("/api/magazine-options", magazineOptionsRoutes);

app.use("/api/brochure", upload.array("files", 10), brochureRoutes);

app.use("/api/pamphlet", upload.array("files", 10), pamphletRoutes);

app.use(
  "/api/product-catalogue",
  upload.array("files", 10),
  productCatalogueRoutes
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
  console.log(`Server running on port ${PORT}`);
});