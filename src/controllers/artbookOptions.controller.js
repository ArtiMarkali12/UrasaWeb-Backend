import artbookOptionsService from "../services/artbookOptions.service.js";

export const getAllArtbookOptions = async (req, res) => {
  try {
    const options = await artbookOptionsService.getAllArtbookOptions();

    res.status(200).json({
      success: true,
      data: options
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching artbook options",
      error: error.message
    });
  }
};

export const addArtbookOptionValue = async (req, res, category) => {
  try {
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required"
      });
    }

    const options = await artbookOptionsService.addArtbookOptionValue(category, value);

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

export const updateArtbookOptionValue = async (req, res, category) => {
  try {
    const { index } = req.params;
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required"
      });
    }

    const options = await artbookOptionsService.updateArtbookOptionValue(category, parseInt(index), value);

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

export const deleteArtbookOptionValue = async (req, res, category) => {
  try {
    const { index } = req.params;

    const options = await artbookOptionsService.deleteArtbookOptionValue(category, parseInt(index));

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
  getAllArtbookOptions,
  addArtbookOptionValue,
  updateArtbookOptionValue,
  deleteArtbookOptionValue
};