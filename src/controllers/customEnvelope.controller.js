import customEnvelopeService from "../services/customEnvelope.service.js";

export const createCustomEnvelope = async (req, res) => {
  try {
    const data = req.body;

    if (req.files) {
      data.files = req.files.map((file) => file.path);
    }

    const customEnvelope =
      await customEnvelopeService.createCustomEnvelope(data);

    res.status(201).json({
      success: true,
      message: "Custom envelope created successfully",
      data: customEnvelope,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating custom envelope",
      error: error.message,
    });
  }
};

export const getAllCustomEnvelopes = async (req, res) => {
  try {
    const customEnvelopes = await customEnvelopeService.getAllCustomEnvelopes();

    res.status(200).json({
      success: true,
      data: customEnvelopes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching custom envelopes",
    });
  }
};

export const getCustomEnvelopeById = async (req, res) => {
  try {
    const customEnvelope = await customEnvelopeService.getCustomEnvelopeById(
      req.params.id,
    );

    if (!customEnvelope) {
      return res.status(404).json({
        success: false,
        message: "Custom envelope not found",
      });
    }

    res.status(200).json({
      success: true,
      data: customEnvelope,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching custom envelope",
    });
  }
};

export const deleteCustomEnvelope = async (req, res) => {
  try {
    await customEnvelopeService.deleteCustomEnvelope(req.params.id);

    res.status(200).json({
      success: true,
      message: "Custom envelope deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting custom envelope",
    });
  }
};

export const updateCustomEnvelope = async (req, res) => {
  try {
    const data = req.body;

    const customEnvelope = await customEnvelopeService.updateCustomEnvelope(
      req.params.id,
      data,
    );

    if (!customEnvelope) {
      return res.status(404).json({
        success: false,
        message: "Custom envelope not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Custom envelope updated successfully",
      data: customEnvelope,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating custom envelope",
      error: error.message,
    });
  }
};

export default {
  createCustomEnvelope,
  getAllCustomEnvelopes,
  getCustomEnvelopeById,
  updateCustomEnvelope,
  deleteCustomEnvelope,
};
