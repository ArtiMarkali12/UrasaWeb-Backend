import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import bookletQuoteRoutes from "./src/routes/bookletQuote.routes.js";
import errorHandler from "./src/middleware/error.middleware.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/booklet-quote", bookletQuoteRoutes);
app.use("/api/booklet-options", bookletQuoteRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});