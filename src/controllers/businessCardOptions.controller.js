import BusinessCardOption from "../models/businessCardOptions.model.js";

export const getAllBusinessCardOptions = async (req, res) => {
  try {
    const options = await BusinessCardOption.getAllOptions();

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

    const options = await BusinessCardOption.addCategory(categoryKey);

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

    const options = await BusinessCardOption.addSubcategory(
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

    const options = await BusinessCardOption.deleteCategory(categoryKey);

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

    const options = await BusinessCardOption.deleteSubcategory(
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

    const options = await BusinessCardOption.addAttribute(
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

    const options = await BusinessCardOption.updateAttribute(
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

    const options = await BusinessCardOption.deleteAttribute(
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

    const options = await BusinessCardOption.addCategoryAttribute(
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

    const options = await BusinessCardOption.updateCategoryAttribute(
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

    const options = await BusinessCardOption.deleteCategoryAttribute(
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

// Helper methods for route handlers
export const addBusinessCardOptionValue = async (req, res, optionType) => {
  try {
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required",
      });
    }

    const categoryMap = {
      cardSizes: "cardSizes",
      paperStocks: "paperStocks",
      paperTextures: "paperTextures",
      printingSides: "printingSides",
      specialEffects: "specialEffects",
      foilColors: "foilColors",
      cornerStyles: "cornerStyles",
      cornerColors: "cornerColors",
    };

    const categoryKey = categoryMap[optionType];

    if (!categoryKey) {
      return res.status(400).json({
        success: false,
        message: "Invalid option type",
      });
    }

    const options = await BusinessCardOption.addCategoryAttribute(
      categoryKey,
      value,
    );

    res.status(201).json({
      success: true,
      message: `${optionType} value added successfully`,
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBusinessCardOptionValue = async (req, res, optionType) => {
  try {
    const { index } = req.params;
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required",
      });
    }

    const categoryMap = {
      cardSizes: "cardSizes",
      paperStocks: "paperStocks",
      paperTextures: "paperTextures",
      printingSides: "printingSides",
      specialEffects: "specialEffects",
      foilColors: "foilColors",
      cornerStyles: "cornerStyles",
      cornerColors: "cornerColors",
    };

    const categoryKey = categoryMap[optionType];

    if (!categoryKey) {
      return res.status(400).json({
        success: false,
        message: "Invalid option type",
      });
    }

    const options = await BusinessCardOption.updateCategoryAttribute(
      categoryKey,
      parseInt(index),
      value,
    );

    res.status(200).json({
      success: true,
      message: `${optionType} value updated successfully`,
      data: options,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBusinessCardOptionValue = async (req, res, optionType) => {
  try {
    const { index } = req.params;

    const categoryMap = {
      cardSizes: "cardSizes",
      paperStocks: "paperStocks",
      paperTextures: "paperTextures",
      printingSides: "printingSides",
      specialEffects: "specialEffects",
      foilColors: "foilColors",
      cornerStyles: "cornerStyles",
      cornerColors: "cornerColors",
    };

    const categoryKey = categoryMap[optionType];

    if (!categoryKey) {
      return res.status(400).json({
        success: false,
        message: "Invalid option type",
      });
    }

    const options = await BusinessCardOption.deleteCategoryAttribute(
      categoryKey,
      parseInt(index),
    );

    res.status(200).json({
      success: true,
      message: `${optionType} value deleted successfully`,
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
  getAllBusinessCardOptions,
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
  addBusinessCardOptionValue,
  updateBusinessCardOptionValue,
  deleteBusinessCardOptionValue,
};
