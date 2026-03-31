import artbookService from "../services/artbook.service.js";

export const createArtbook = async (req, res) => {
  try {
    const data = req.body;

    if (req.files) {
      data.files = req.files.map((file) => file.path);
    }

    const artbook = await artbookService.createArtbook(data);

    res.status(201).json({
      success: true,
      message: "Artbook quote is created successfully",
      data: artbook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating artbook quote",
      error: error.message,
    });
  }
};

export const getAllArtbooks = async (req, res) => {
  try {
    const artbooks = await artbookService.getAllArtbooks();

    res.status(200).json({
      success: true,
      data: artbooks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching artbooks",
    });
  }
};

export const getArtbookById = async (req, res) => {
  try {
    const artbook = await artbookService.getArtbookById(req.params.id);

    if (!artbook) {
      return res.status(404).json({
        success: false,
        message: "Artbook quote not found",
      });
    }

    res.status(200).json({
      success: true,
      data: artbook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching artbook quote",
    });
  }
};

export const deleteArtbook = async (req, res) => {
  try {
    await artbookService.deleteArtbook(req.params.id);

    res.status(200).json({
      success: true,
      message: "Artbook quote deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting artbook quote",
    });
  }
};

export const updateArtbook = async (req, res) => {
  try {
    const data = req.body;

    if (req.files && req.files.length > 0) {
      data.files = req.files.map((file) => file.path);
    }

    const artbook = await artbookService.updateArtbook(req.params.id, data);

    if (!artbook) {
      return res.status(404).json({
        success: false,
        message: "Artbook quote not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Artbook quote updated successfully",
      data: artbook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating artbook quote",
      error: error.message,
    });
  }
};

export default {
  createArtbook,
  getAllArtbooks,
  getArtbookById,
  deleteArtbook,
  updateArtbook,
};
