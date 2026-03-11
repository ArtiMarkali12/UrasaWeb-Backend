import customCardService from "../services/customCard.service.js";

export const createCustomCard = async (req, res) => {
  try {
    const data = req.body;

    if (req.files) {
      data.files = req.files.map(file => file.path);
    }

    const customCard = await customCardService.createCustomCard(data);

    res.status(201).json({
      success: true,
      message: "Custom card created successfully",
      data: customCard
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating custom card",
      error: error.message
    });
  }
};

export const getAllCustomCards = async (req, res) => {
  try {
    const customCards = await customCardService.getAllCustomCards();

    res.status(200).json({
      success: true,
      data: customCards
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching custom cards"
    });
  }
};

export const getCustomCardById = async (req, res) => {
  try {
    const customCard = await customCardService.getCustomCardById(req.params.id);

    if (!customCard) {
      return res.status(404).json({
        success: false,
        message: "Custom card not found"
      });
    }

    res.status(200).json({
      success: true,
      data: customCard
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching custom card"
    });
  }
};

export const deleteCustomCard = async (req, res) => {
  try {
    await customCardService.deleteCustomCard(req.params.id);

    res.status(200).json({
      success: true,
      message: "Custom card deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting custom card"
    });
  }
};

export default {
  createCustomCard,
  getAllCustomCards,
  getCustomCardById,
  deleteCustomCard
};