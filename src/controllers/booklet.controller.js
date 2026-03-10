import bookletService from "../services/booklet.service.js";

export const createBooklet = async (req, res) => {
  try {
    const data = req.body;

    if (req.files) {
      data.files = req.files.map(file => file.path);
    }

    const booklet = await bookletService.createBooklet(data);

    res.status(201).json({
      success: true,
      message: "Booklet created successfully",
      data: booklet
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating booklet",
      error: error.message
    });
  }
};

export const getAllBooklets = async (req, res) => {
  try {
    const booklets = await bookletService.getAllBooklets();

    res.status(200).json({
      success: true,
      data: booklets
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching booklets"
    });
  }
};

export const getBookletById = async (req, res) => {
  try {
    const booklet = await bookletService.getBookletById(req.params.id);

    if (!booklet) {
      return res.status(404).json({
        success: false,
        message: "Booklet not found"
      });
    }

    res.status(200).json({
      success: true,
      data: booklet
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching booklet"
    });
  }
};

export const deleteBooklet = async (req, res) => {
  try {
    await bookletService.deleteBooklet(req.params.id);

    res.status(200).json({
      success: true,
      message: "Booklet deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting booklet"
    });
  }
};

export default {
  createBooklet,
  getAllBooklets,
  getBookletById,
  deleteBooklet
};