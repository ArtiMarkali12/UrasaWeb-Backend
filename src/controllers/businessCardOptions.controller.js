import businessCardOptionsService from "../services/businessCardOptions.service.js";

export const getAllBusinessCardOptions = async (req, res) => {
  try {
    const options = await businessCardOptionsService.getAllBusinessCardOptions();

    res.status(200).json({
      success: true,
      data: options
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching business card options",
      error: error.message
    });
  }
};

export const addBusinessCardOptionValue = async (req, res, category) => {
  try {
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required"
      });
    }

    const options = await businessCardOptionsService.addBusinessCardOptionValue(category, value);

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

export const updateBusinessCardOptionValue = async (req, res, category) => {
  try {
    const { index } = req.params;
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required"
      });
    }

    const options = await businessCardOptionsService.updateBusinessCardOptionValue(category, parseInt(index), value);

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

export const deleteBusinessCardOptionValue = async (req, res, category) => {
  try {
    const { index } = req.params;

    const options = await businessCardOptionsService.deleteBusinessCardOptionValue(category, parseInt(index));

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
  getAllBusinessCardOptions,
  addBusinessCardOptionValue,
  updateBusinessCardOptionValue,
  deleteBusinessCardOptionValue
};