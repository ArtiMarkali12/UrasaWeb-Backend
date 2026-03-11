import customEnvelopeOptionsService from "../services/customEnvelopeOptions.service.js";

export const getAllCustomEnvelopeOptions = async (req, res) => {
  try {
    const options = await customEnvelopeOptionsService.getAllCustomEnvelopeOptions();

    res.status(200).json({
      success: true,
      data: options
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching custom envelope options",
      error: error.message
    });
  }
};

export const addCustomEnvelopeOptionValue = async (req, res, category) => {
  try {
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required"
      });
    }

    const options = await customEnvelopeOptionsService.addCustomEnvelopeOptionValue(category, value);

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

export const updateCustomEnvelopeOptionValue = async (req, res, category) => {
  try {
    const { index } = req.params;
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required"
      });
    }

    const options = await customEnvelopeOptionsService.updateCustomEnvelopeOptionValue(category, parseInt(index), value);

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

export const deleteCustomEnvelopeOptionValue = async (req, res, category) => {
  try {
    const { index } = req.params;

    const options = await customEnvelopeOptionsService.deleteCustomEnvelopeOptionValue(category, parseInt(index));

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
  getAllCustomEnvelopeOptions,
  addCustomEnvelopeOptionValue,
  updateCustomEnvelopeOptionValue,
  deleteCustomEnvelopeOptionValue
};