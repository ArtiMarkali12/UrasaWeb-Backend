import customCardOptionsService from "../services/customCardOptions.service.js";

export const getAllCustomCardOptions = async (req, res) => {
  try {
    const options = await customCardOptionsService.getAllCustomCardOptions();

    res.status(200).json({
      success: true,
      data: options
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching custom card options",
      error: error.message
    });
  }
};

export const addCustomCardOptionValue = async (req, res, category) => {
  try {
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required"
      });
    }

    const options = await customCardOptionsService.addCustomCardOptionValue(category, value);

    res.status(201).json({
      success: true,
      message: `${category} option added successfully`,
      data: options
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const updateCustomCardOptionValue = async (req, res, category) => {
  try {
    const { index } = req.params;
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required"
      });
    }

    const options = await customCardOptionsService.updateCustomCardOptionValue(category, parseInt(index), value);

    res.status(200).json({
      success: true,
      message: `${category} option updated successfully`,
      data: options
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const deleteCustomCardOptionValue = async (req, res, category) => {
  try {
    const { index } = req.params;

    const options = await customCardOptionsService.deleteCustomCardOptionValue(category, parseInt(index));

    res.status(200).json({
      success: true,
      message: `${category} option deleted successfully`,
      data: options
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export default {
  getAllCustomCardOptions,
  addCustomCardOptionValue,
  updateCustomCardOptionValue,
  deleteCustomCardOptionValue
};