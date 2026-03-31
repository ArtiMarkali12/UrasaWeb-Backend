import businessCardService from "../services/businessCard.service.js";

export const createBusinessCard = async (req, res) => {
  try {
    const data = req.body;

    if (req.files) {
      data.files = req.files.map((file) => file.path);
    }

    const businessCard = await businessCardService.createBusinessCard(data);

    res.status(201).json({
      success: true,
      message: "Business card created successfully",
      data: businessCard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating business card",
      error: error.message,
    });
  }
};

export const getAllBusinessCards = async (req, res) => {
  try {
    const businessCards = await businessCardService.getAllBusinessCards();

    res.status(200).json({
      success: true,
      data: businessCards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching business cards",
    });
  }
};

export const getBusinessCardById = async (req, res) => {
  try {
    const businessCard = await businessCardService.getBusinessCardById(
      req.params.id,
    );

    if (!businessCard) {
      return res.status(404).json({
        success: false,
        message: "Business card not found",
      });
    }

    res.status(200).json({
      success: true,
      data: businessCard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching business card",
    });
  }
};

export const deleteBusinessCard = async (req, res) => {
  try {
    await businessCardService.deleteBusinessCard(req.params.id);

    res.status(200).json({
      success: true,
      message: "Business card deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting business card",
    });
  }
};

export const updateBusinessCard = async (req, res) => {
  try {
    const data = req.body;

    if (req.files && req.files.length > 0) {
      data.files = req.files.map((file) => file.path);
    }

    const businessCard = await businessCardService.updateBusinessCard(
      req.params.id,
      data,
    );

    if (!businessCard) {
      return res.status(404).json({
        success: false,
        message: "Business card not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Business card updated successfully",
      data: businessCard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating business card",
      error: error.message,
    });
  }
};

export default {
  createBusinessCard,
  getAllBusinessCards,
  getBusinessCardById,
  deleteBusinessCard,
  updateBusinessCard,
};
