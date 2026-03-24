import ProductCatalogue from "../models/productCatalogue.model.js";

export const createProductCatalogue = async (data) => {
  const productCatalogue = new ProductCatalogue(data);
  return await productCatalogue.save();
};

export const getAllProductCatalogues = async () => {
  return await ProductCatalogue.find().sort({ createdAt: -1 });
};

export const getProductCatalogueById = async (id) => {
  return await ProductCatalogue.findById(id);
};

export const updateProductCatalogue = async (id, data) => {
  return await ProductCatalogue.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProductCatalogue = async (id) => {
  return await ProductCatalogue.findByIdAndDelete(id);
};

export default {
  createProductCatalogue,
  getAllProductCatalogues,
  getProductCatalogueById,
  updateProductCatalogue,
  deleteProductCatalogue,
};
