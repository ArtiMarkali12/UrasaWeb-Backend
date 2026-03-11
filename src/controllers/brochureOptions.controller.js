import brochureOptionsService from "../services/brochureOptions.service.js";

export const getAllBrochureOptions = async (req, res) => {
  try {
    const options = await brochureOptionsService.getAllBrochureOptions();

    res.status(200).json({
      success: true,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching brochure options",
      error: error.message,
    });
  }
};

export const addBrochureOptionValue = async (req, res, field) => {
  try {
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required",
      });
    }

    const options = await brochureOptionsService.addBrochureOptionValue(
      field,
      value,
    );

    res.status(201).json({
      success: true,
      message: `${field} added successfully`,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding brochure option",
      error: error.message,
    });
  }
};

export const updateBrochureOptionValue = async (req, res, field) => {
  try {
    const { value } = req.body;
    const index = parseInt(req.params.index);

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required",
      });
    }

    if (isNaN(index)) {
      return res.status(400).json({
        success: false,
        message: "Invalid index",
      });
    }

    const options = await brochureOptionsService.updateBrochureOptionValue(
      field,
      index,
      value,
    );

    if (!options) {
      return res.status(404).json({
        success: false,
        message: "Option not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `${field} updated successfully`,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating brochure option",
      error: error.message,
    });
  }
};

export const deleteBrochureOptionValue = async (req, res, field) => {
  try {
    const index = parseInt(req.params.index);

    if (isNaN(index)) {
      return res.status(400).json({
        success: false,
        message: "Invalid index",
      });
    }

    const options = await brochureOptionsService.deleteBrochureOptionValue(
      field,
      index,
    );

    if (!options) {
      return res.status(404).json({
        success: false,
        message: "Option not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `${field} deleted successfully`,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting brochure option",
      error: error.message,
    });
  }
};

export default {
  getAllBrochureOptions,
  addBrochureOptionValue,
  updateBrochureOptionValue,
  deleteBrochureOptionValue,
};
