import pamphletService from "../services/pamphlet.service.js";

export const createPamphletQuote = async (req, res) => {
  try {
    const data = req.body;

    if (req.files) {
      data.files = req.files.map((file) => file.path);
    }

    const pamphlet = await pamphletService.createPamphlet(data);

    res.status(201).json({
      success: true,
      message: "Pamphlet quote created successfully",
      data: pamphlet,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating pamphlet quote",
      error: error.message,
    });
  }
};

export const getAllPamphlets = async (req, res) => {
  try {
    const pamphlets = await pamphletService.getAllPamphlets();

    res.status(200).json({
      success: true,
      data: pamphlets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching pamphlet quotes",
    });
  }
};

export const getPamphletById = async (req, res) => {
  try {
    const pamphlet = await pamphletService.getPamphletById(req.params.id);

    if (!pamphlet) {
      return res.status(404).json({
        success: false,
        message: "Pamphlet quote not found",
      });
    }

    res.status(200).json({
      success: true,
      data: pamphlet,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching pamphlet quote",
    });
  }
};

export const deletePamphlet = async (req, res) => {
  try {
    await pamphletService.deletePamphlet(req.params.id);

    res.status(200).json({
      success: true,
      message: "Pamphlet quote deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting pamphlet quote",
    });
  }
};

export default {
  createPamphletQuote,
  getAllPamphlets,
  getPamphletById,
  deletePamphlet,
};
