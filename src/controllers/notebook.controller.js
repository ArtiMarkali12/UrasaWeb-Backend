import notebookService from "../services/notebook.service.js";

/* Create Notebook Quote */

export const createNotebookQuote = async (req, res) => {
  try {
    const data = req.body;

    if (req.files) {
      data.files = req.files.map((file) => file.path);
    }

    const notebook = await notebookService.createNotebook(data);

    res.status(201).json({
      success: true,
      message: "Notebook quote is created successfully",
      data: notebook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating notebook quote",
      error: error.message,
    });
  }
};

/* Get All Notebooks */

export const getAllNotebooks = async (req, res) => {
  try {
    const notebooks = await notebookService.getAllNotebooks();

    res.status(200).json({
      success: true,
      data: notebooks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching notebooks",
    });
  }
};

/* Get Notebook By ID */

export const getNotebookById = async (req, res) => {
  try {
    const notebook = await notebookService.getNotebookById(req.params.id);

    if (!notebook) {
      return res.status(404).json({
        success: false,
        message: "Notebook quote not found",
      });
    }

    res.status(200).json({
      success: true,
      data: notebook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching notebook quote",
    });
  }
};

/* Delete Notebook */

export const deleteNotebook = async (req, res) => {
  try {
    await notebookService.deleteNotebook(req.params.id);

    res.status(200).json({
      success: true,
      message: "Notebook quote deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting notebook quote",
    });
  }
};

/* Update Notebook */

export const updateNotebook = async (req, res) => {
  try {
    const data = req.body;

    if (req.files && req.files.length > 0) {
      data.files = req.files.map((file) => file.path);
    }

    const notebook = await notebookService.updateNotebook(req.params.id, data);

    if (!notebook) {
      return res.status(404).json({
        success: false,
        message: "Notebook quote not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Notebook quote updated successfully",
      data: notebook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating notebook quote",
      error: error.message,
    });
  }
};

export default {
  createNotebookQuote,
  getAllNotebooks,
  getNotebookById,
  deleteNotebook,
  updateNotebook,
};
