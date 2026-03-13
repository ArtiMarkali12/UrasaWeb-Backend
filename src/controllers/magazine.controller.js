import magazineService from "../services/magazine.service.js";

export const createMagazineQuote = async (req, res) => {
  try {
    const data = req.body;

    if (req.files) {
      data.files = req.files.map(file => file.path);
    }

    const magazine = await magazineService.createMagazine(data);

    res.status(201).json({
      success: true,
      message: "Magazine quote created successfully",
      data: magazine
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating magazine quote",
      error: error.message
    });
  }
};

export const getAllQuotes = async (req, res) => {
  try {
    const magazines = await magazineService.getAllMagazines();

    res.status(200).json({
      success: true,
      data: magazines
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching magazine quotes"
    });
  }
};

export const getMagazineById = async (req, res) => {
  try {
    const magazine = await magazineService.getMagazineById(req.params.id);

    if (!magazine) {
      return res.status(404).json({
        success: false,
        message: "Magazine quote not found"
      });
    }

    res.status(200).json({
      success: true,
      data: magazine
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching magazine quote"
    });
  }
};

export const deleteMagazine = async (req, res) => {
  try {
    await magazineService.deleteMagazine(req.params.id);

    res.status(200).json({
      success: true,
      message: "Magazine quote deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting magazine quote"
    });
  }
};

export default {
  createMagazineQuote,
  getAllQuotes,
  getMagazineById,
  deleteMagazine
};