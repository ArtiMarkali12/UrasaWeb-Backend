import NotebookOption from "../models/notebookOptions.model.js";

export const getAllOptions = async (req, res) => {
  try {
    const options = await NotebookOption.getAllOptions();

    res.status(200).json({
      success: true,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching options",
      error: error.message,
    });
  }
};

export const addCategory = async (req, res) => {
  try {
    const { categoryKey } = req.body;

    if (!categoryKey) {
      return res.status(400).json({
        success: false,
        message: "Category key is required",
      });
    }

    const options = await NotebookOption.addCategory(categoryKey);

    res.status(201).json({
      success: true,
      message: `Category "${categoryKey}" added successfully`,
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addSubcategory = async (req, res) => {
  try {
    const { categoryKey } = req.params;
    const { subcategoryKey } = req.body;

    if (!subcategoryKey) {
      return res.status(400).json({
        success: false,
        message: "Subcategory key is required",
      });
    }

    const options = await NotebookOption.addSubcategory(
      categoryKey,
      subcategoryKey,
    );

    res.status(201).json({
      success: true,
      message: `Subcategory "${subcategoryKey}" added to "${categoryKey}" successfully`,
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { categoryKey } = req.body;

    if (!categoryKey) {
      return res.status(400).json({
        success: false,
        message: "Category key is required",
      });
    }

    const options = await NotebookOption.deleteCategory(categoryKey);

    res.status(200).json({
      success: true,
      message: `Category "${categoryKey}" deleted successfully`,
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteSubcategory = async (req, res) => {
  try {
    const { categoryKey, subcategoryKey } = req.params;

    const options = await NotebookOption.deleteSubcategory(
      categoryKey,
      subcategoryKey,
    );

    res.status(200).json({
      success: true,
      message: `Subcategory "${subcategoryKey}" deleted from "${categoryKey}" successfully`,
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addAttribute = async (req, res) => {
  try {
    const { categoryKey, subcategoryKey } = req.params;
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Attribute value is required",
      });
    }

    const options = await NotebookOption.addAttribute(
      categoryKey,
      subcategoryKey,
      value,
    );

    res.status(201).json({
      success: true,
      message: `Attribute added to "${subcategoryKey}" successfully`,
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateAttribute = async (req, res) => {
  try {
    const { categoryKey, subcategoryKey, index } = req.params;
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required",
      });
    }

    const options = await NotebookOption.updateAttribute(
      categoryKey,
      subcategoryKey,
      parseInt(index),
      value,
    );

    res.status(200).json({
      success: true,
      message: `Attribute updated in "${subcategoryKey}" successfully`,
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteAttribute = async (req, res) => {
  try {
    const { categoryKey, subcategoryKey, index } = req.params;

    const options = await NotebookOption.deleteAttribute(
      categoryKey,
      subcategoryKey,
      parseInt(index),
    );

    res.status(200).json({
      success: true,
      message: `Attribute deleted from "${subcategoryKey}" successfully`,
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Category-level attribute methods
export const addCategoryAttribute = async (req, res) => {
  try {
    const { categoryKey } = req.params;
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Attribute value is required",
      });
    }

    const options = await NotebookOption.addCategoryAttribute(
      categoryKey,
      value,
    );

    res.status(201).json({
      success: true,
      message: `Attribute added to "${categoryKey}" successfully`,
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCategoryAttribute = async (req, res) => {
  try {
    const { categoryKey, index } = req.params;
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required",
      });
    }

    const options = await NotebookOption.updateCategoryAttribute(
      categoryKey,
      parseInt(index),
      value,
    );

    res.status(200).json({
      success: true,
      message: `Attribute updated in "${categoryKey}" successfully`,
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCategoryAttribute = async (req, res) => {
  try {
    const { categoryKey, index } = req.params;

    const options = await NotebookOption.deleteCategoryAttribute(
      categoryKey,
      parseInt(index),
    );

    res.status(200).json({
      success: true,
      message: `Attribute deleted from "${categoryKey}" successfully`,
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  getAllOptions,
  addCategory,
  addSubcategory,
  deleteCategory,
  deleteSubcategory,
  addAttribute,
  updateAttribute,
  deleteAttribute,
  addCategoryAttribute,
  updateCategoryAttribute,
  deleteCategoryAttribute,
};
