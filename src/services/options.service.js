import Options from "../models/options.model.js";

export const getAllOptions = async () => {
  return await Options.getAllOptions();
};

export const addCategory = async (categoryKey, displayName) => {
  if (!categoryKey || !categoryKey.trim()) {
    throw new Error("Category key is required");
  }

  return await Options.addCategory(
    categoryKey.trim(),
    displayName || categoryKey.trim(),
  );
};

export const addSubcategory = async (
  categoryKey,
  subcategoryKey,
  displayName,
) => {
  if (!categoryKey || !categoryKey.trim()) {
    throw new Error("Category key is required");
  }
  if (!subcategoryKey || !subcategoryKey.trim()) {
    throw new Error("Subcategory key is required");
  }

  return await Options.addSubcategory(
    categoryKey.trim(),
    subcategoryKey.trim(),
    displayName || subcategoryKey.trim(),
  );
};

export const deleteCategory = async (categoryKey) => {
  return await Options.deleteCategory(categoryKey);
};

export const deleteSubcategory = async (categoryKey, subcategoryKey) => {
  return await Options.deleteSubcategory(categoryKey, subcategoryKey);
};

export const addAttribute = async (categoryKey, subcategoryKey, value) => {
  if (!value || !value.trim()) {
    throw new Error("Attribute value is required");
  }

  return await Options.addAttribute(categoryKey, subcategoryKey, value.trim());
};

export const updateAttribute = async (
  categoryKey,
  subcategoryKey,
  index,
  newValue,
) => {
  if (!newValue || !newValue.trim()) {
    throw new Error("New value is required");
  }

  return await Options.updateAttribute(
    categoryKey,
    subcategoryKey,
    parseInt(index),
    newValue.trim(),
  );
};

export const deleteAttribute = async (categoryKey, subcategoryKey, index) => {
  return await Options.deleteAttribute(
    categoryKey,
    subcategoryKey,
    parseInt(index),
  );
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
};
