import optionsService from "../services/options.service.js";

export const getAllOptions = async (req, res) => {
  try {
    const options = await optionsService.getAllOptions();

    res.status(200).json({
      success: true,
      data: options
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching options",
      error: error.message
    });
  }
};

export const addOptionValue = async (req, res) => {
  try {
    const category = req.route.path.split("/")[1];
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required"
      });
    }

    const options = await optionsService.addOptionValue(category, value);

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

export const updateOptionValue = async (req, res) => {
  try {
    const category = req.route.path.split("/")[1];
    const { index } = req.params;
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required"
      });
    }

    const options = await optionsService.updateOptionValue(category, parseInt(index), value);

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

export const deleteOptionValue = async (req, res) => {
  try {
    const category = req.route.path.split("/")[1];
    const { index } = req.params;

    const options = await optionsService.deleteOptionValue(category, parseInt(index));

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
  getAllOptions,
  addOptionValue,
  updateOptionValue,
  deleteOptionValue
};