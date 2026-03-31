import CustomCardOption from "../models/customCardOptions.model.js";

export const getAllOptions = async (req, res) => {
  try {
    const options = await CustomCardOption.getAllOptions();

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
    const options = await CustomCardOption.getDropdownOptions();

    res.status(200).json({
      success: true,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching custom card dropdown options",
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

    const options = await CustomCardOption.addCategory(
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

    const options = await CustomCardOption.updateCategory(categoryKey, {
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

    const options = await CustomCardOption.addSubcategory(
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

    const options = await CustomCardOption.updateSubcategoryField(
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

    const options = await CustomCardOption.deleteCategory(categoryKey);

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

    const options = await CustomCardOption.deleteSubcategory(
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

    const options = await CustomCardOption.addAttribute(
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

    const options = await CustomCardOption.updateAttribute(
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

    const options = await CustomCardOption.deleteAttribute(
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

    const options = await CustomCardOption.addCategoryAttribute(
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

    const options = await CustomCardOption.updateCategoryAttribute(
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

    const options = await CustomCardOption.deleteCategoryAttribute(
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

// Card Types Management Methods
export const getAllCardTypes = async (req, res) => {
  try {
    const cardTypes = await CustomCardOption.getAllCardTypes();

    res.status(200).json({
      success: true,
      data: cardTypes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching card types",
      error: error.message,
    });
  }
};

export const addCardType = async (req, res) => {
  try {
    const cardTypeData = req.body;

    const options = await CustomCardOption.addCardType(cardTypeData);

    res.status(201).json({
      success: true,
      message: "Card type added successfully",
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCardType = async (req, res) => {
  try {
    const { index } = req.params;
    const cardTypeData = req.body;

    const options = await CustomCardOption.updateCardType(
      parseInt(index),
      cardTypeData,
    );

    res.status(200).json({
      success: true,
      message: "Card type updated successfully",
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCardType = async (req, res) => {
  try {
    const { index } = req.params;

    const options = await CustomCardOption.deleteCardType(parseInt(index));

    res.status(200).json({
      success: true,
      message: "Card type deleted successfully",
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const reorderCardTypes = async (req, res) => {
  try {
    const { fromIndex, toIndex } = req.body;

    const options = await CustomCardOption.reorderCardTypes(
      parseInt(fromIndex),
      parseInt(toIndex),
    );

    res.status(200).json({
      success: true,
      message: "Card types reordered successfully",
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
  getAllCardTypes,
  addCardType,
  updateCardType,
  deleteCardType,
  reorderCardTypes,
};
