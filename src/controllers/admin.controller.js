import jwt from "jsonwebtoken";
import Admin from "../models/admin.model.js";

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "your-secret-key", {
    expiresIn: "30d",
  });
};

// Register Admin
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin with this email is already exists",
      });
    }

    // Create admin
    const admin = await Admin.create({
      name,
      email,
      password,
      role: role || "admin",
    });

    const token = generateToken(admin._id);

    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      data: {
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        },
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error registering admin",
      error: error.message,
    });
  }
};

// Login Admin
export const loginAdmin = async (req, res) => {
  try {
    console.log("Login attempt received:", req.body);
    const { email, password } = req.body;

    // Check if admin exists
    console.log("Looking for admin with email:", email);
    const admin = await Admin.findOne({ email });
    console.log("Admin found:", admin ? "Yes" : "No");

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check if admin is active
    if (!admin.isActive) {
      return res.status(401).json({
        success: false,
        message: "Account is deactivated. Please contact super admin.",
      });
    }

    // Check password
    console.log("Checking password match...");
    const isMatch = await admin.comparePassword(password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = generateToken(admin._id);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        },
        token,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    console.error("Error stack:", error.stack);
    res.status(500).json({
      success: false,
      message: "Error logging in",
      error: error.message,
      stack: error.stack,
    });
  }
};

// Get Current Admin Profile
export const getProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select("-password");

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching profile",
      error: error.message,
    });
  }
};

// Update Admin Profile
export const updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;

    const admin = await Admin.findByIdAndUpdate(
      req.admin.id,
      { name, email },
      { new: true, runValidators: true },
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating profile",
      error: error.message,
    });
  }
};

// Update Password
export const updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    console.log("Password update request for admin:", req.admin.id);

    const admin = await Admin.findById(req.admin.id);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    // Check current password
    const isMatch = await admin.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    admin.password = newPassword;
    await admin.save();

    console.log("Password updated successfully for admin:", req.admin.id);

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error("Error updating password:", error);
    console.error("Error stack:", error.stack);
    res.status(500).json({
      success: false,
      message: "Error updating password",
      error: error.message,
      stack: error.stack,
    });
  }
};

// Get All Admins (Super Admin Only)
export const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select("-password");

    res.status(200).json({
      success: true,
      data: admins,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching admins",
      error: error.message,
    });
  }
};

export default {
  registerAdmin,
  loginAdmin,
  getProfile,
  updateProfile,
  updatePassword,
  getAllAdmins,
};
