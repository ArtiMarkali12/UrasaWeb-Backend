import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

import connectDB from "./src/config/db.js";
import bookletQuoteRoutes from "./src/routes/booklet.routes.js";
import errorHandler from "./src/middleware/error.middleware.js";

dotenv.config();

const app = express();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

// Apply upload middleware to booklet quote routes
app.use("/api/booklet-quote", upload.array("files", 10), bookletQuoteRoutes);

connectDB();

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});