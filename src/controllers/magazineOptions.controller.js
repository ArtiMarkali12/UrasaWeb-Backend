import magazineOptionsService from "../services/magazineOptions.service.js";

export const getAllOptions = async (req, res) => {
  try {
    const options = await magazineOptionsService.getAllOptions();

    res.status(200).json({
      success: true,
      data: options
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching magazine options",
      error: error.message
    });
  }
};

export const addOptionValue = async (req, res, category) => {
  try {
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required"
      });
    }

    const options = await magazineOptionsService.addOptionValue(category, value);

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

export const updateOptionValue = async (req, res, category) => {
  try {
    const { index } = req.params;
    const { value } = req.body;

    const options = await magazineOptionsService.updateOptionValue(
      category,
      parseInt(index),
      value
    );

    res.status(200).json({
      success: true,
      message: `${category} option updated`,
      data: options
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const deleteOptionValue = async (req, res, category) => {
  try {
    const { index } = req.params;

    const options = await magazineOptionsService.deleteOptionValue(
      category,
      parseInt(index)
    );

    res.status(200).json({
      success: true,
      message: `${category} option deleted`,
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
  getAllOptions,
  addOptionValue,
  updateOptionValue,
  deleteOptionValue
};