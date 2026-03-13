import express from "express";
const router = express.Router();

import {
  registerAdmin,
  loginAdmin,
  getProfile,
  updateProfile,
  updatePassword,
  getAllAdmins
} from "../controllers/admin.controller.js";

import { protect, authorize } from "../middleware/auth.middleware.js";

// Public routes
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// Protected routes
router.use(protect);

router.get("/profile", getProfile);
router.put("/profile", updateProfile);
router.put("/change-password", updatePassword);
router.get("/", authorize("super-admin"), getAllAdmins);

export default router;
