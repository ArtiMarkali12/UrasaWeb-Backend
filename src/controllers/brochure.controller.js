import brochureService from "../services/brochure.service.js";

export const createBrochureQuote = async (req, res) => {
  try {
    const data = req.body;

    if (req.files) {
      data.files = req.files.map((file) => file.path);
    }

    const brochure = await brochureService.createBrochure(data);

    res.status(201).json({
      success: true,
      message: "Brochure quote created successfully",
      data: brochure,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating brochure quote",
      error: error.message,
    });
  }
};

export const getAllBrochures = async (req, res) => {
  try {
    const brochures = await brochureService.getAllBrochures();

    res.status(200).json({
      success: true,
      data: brochures,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching brochure quotes",
    });
  }
};

export const getBrochureById = async (req, res) => {
  try {
    const brochure = await brochureService.getBrochureById(req.params.id);

    if (!brochure) {
      return res.status(404).json({
        success: false,
        message: "Brochure quote not found",
      });
    }

    res.status(200).json({
      success: true,
      data: brochure,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching brochure quote",
    });
  }
};

export const deleteBrochure = async (req, res) => {
  try {
    await brochureService.deleteBrochure(req.params.id);

    res.status(200).json({
      success: true,
      message: "Brochure quote deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting brochure quote",
    });
  }
};

export default {
  createBrochureQuote,
  getAllBrochures,
  getBrochureById,
  deleteBrochure,
};
