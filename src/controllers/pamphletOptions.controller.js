import pamphletOptionsService from "../services/pamphletOptions.service.js";

export const getAllPamphletOptions = async (req, res) => {
  try {
    const options = await pamphletOptionsService.getAllPamphletOptions();

    res.status(200).json({
      success: true,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching pamphlet options",
      error: error.message,
    });
  }
};

export const addPamphletOptionValue = async (req, res, field) => {
  try {
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required",
      });
    }

    const options = await pamphletOptionsService.addPamphletOptionValue(
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
      message: "Error adding pamphlet option",
      error: error.message,
    });
  }
};

export const updatePamphletOptionValue = async (req, res, field) => {
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

    const options = await pamphletOptionsService.updatePamphletOptionValue(
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
      message: "Error updating pamphlet option",
      error: error.message,
    });
  }
};

export const deletePamphletOptionValue = async (req, res, field) => {
  try {
    const index = parseInt(req.params.index);

    if (isNaN(index)) {
      return res.status(400).json({
        success: false,
        message: "Invalid index",
      });
    }

    const options = await pamphletOptionsService.deletePamphletOptionValue(
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
      message: "Error deleting pamphlet option",
      error: error.message,
    });
  }
};

export default {
  getAllPamphletOptions,
  addPamphletOptionValue,
  updatePamphletOptionValue,
  deletePamphletOptionValue,
};
