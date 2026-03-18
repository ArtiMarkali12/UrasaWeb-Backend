import Options from "../models/options.model.js";

export const getAllOptions = async () => {
  return await Options.getAllOptions();
};

export const addOptionValue = async (category, value) => {
  return await Options.addOptionValue(category, value);
};

export const updateOptionValue = async (category, index, newValue) => {
  return await Options.updateOptionValue(category, index, newValue);
};

export const deleteOptionValue = async (category, index) => {
  return await Options.deleteOptionValue(category, index);
};

export const addCategory = async (categoryName) => {
  // No validation - allow any characters
  if (!categoryName || !categoryName.trim()) {
    throw new Error("Category name is required");
  }

  return await Options.addCategory(categoryName.trim());
};

export const deleteCategory = async (categoryName) => {
  return await Options.deleteCategory(categoryName);
};

export default {
  getAllOptions,
  addOptionValue,
  updateOptionValue,
  deleteOptionValue,
  addCategory,
  deleteCategory,
};
