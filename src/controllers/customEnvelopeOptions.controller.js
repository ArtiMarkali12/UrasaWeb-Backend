import CustomEnvelopeOption from "../models/customEnvelopeOptions.model.js";

export const getAllOptions = async (req, res) => {
  try {
    const options = await CustomEnvelopeOption.getAllOptions();

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

// Get options in hierarchical format for dropdowns (for frontend)
export const getDropdownOptions = async (req, res) => {
  try {
    const options = await CustomEnvelopeOption.getDropdownOptions();

    res.status(200).json({
      success: true,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching custom envelope dropdown options",
      error: error.message,
    });
  }
};

export const addCategory = async (req, res) => {
  try {
    const { categoryKey, displayName, fieldType, placeholder, required } =
      req.body;

    if (!categoryKey) {
      return res.status(400).json({
        success: false,
        message: "Category key is required",
      });
    }

    const options = await CustomEnvelopeOption.addCategory(
      categoryKey,
      displayName || categoryKey,
      fieldType || "select",
      placeholder || "",
      required || false,
    );

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

// Update category field configuration
export const updateCategory = async (req, res) => {
  try {
    const { categoryKey } = req.params;
    const { displayName, fieldType, placeholder, required } = req.body;

    const options = await CustomEnvelopeOption.updateCategory(categoryKey, {
      displayName,
      fieldType,
      placeholder,
      required,
    });

    res.status(200).json({
      success: true,
      message: `Category "${categoryKey}" updated successfully`,
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
    const { subcategoryKey, displayName, fieldType, placeholder, required } =
      req.body;

    if (!subcategoryKey) {
      return res.status(400).json({
        success: false,
        message: "Subcategory key is required",
      });
    }

    const options = await CustomEnvelopeOption.addSubcategory(
      categoryKey,
      subcategoryKey,
      displayName || subcategoryKey,
      fieldType || "select",
      placeholder || "",
      required || false,
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

// Update subcategory field configuration
export const updateSubcategoryField = async (req, res) => {
  try {
    const { categoryKey, subcategoryKey } = req.params;
    const { fieldType, placeholder, required, displayName } = req.body;

    const options = await CustomEnvelopeOption.updateSubcategoryField(
      categoryKey,
      subcategoryKey,
      { fieldType, placeholder, required, displayName },
    );

    res.status(200).json({
      success: true,
      message: `Subcategory "${subcategoryKey}" field configuration updated successfully`,
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

    const options = await CustomEnvelopeOption.deleteCategory(categoryKey);

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

    const options = await CustomEnvelopeOption.deleteSubcategory(
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

    const options = await CustomEnvelopeOption.addAttribute(
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

    const options = await CustomEnvelopeOption.updateAttribute(
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

    const options = await CustomEnvelopeOption.deleteAttribute(
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

    const options = await CustomEnvelopeOption.addCategoryAttribute(
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

    const options = await CustomEnvelopeOption.updateCategoryAttribute(
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

    const options = await CustomEnvelopeOption.deleteCategoryAttribute(
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
  getDropdownOptions,
  addCategory,
  updateCategory,
  deleteCategory,
  addSubcategory,
  updateSubcategoryField,
  deleteSubcategory,
  addAttribute,
  updateAttribute,
  deleteAttribute,
  addCategoryAttribute,
  updateCategoryAttribute,
  deleteCategoryAttribute,
};
