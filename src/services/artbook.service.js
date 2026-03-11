import Artbook from "../models/artbook.model.js";

export const createArtbook = async (data) => {
  const artbook = new Artbook(data);
  return await artbook.save();
};

export const getAllArtbooks = async () => {
  return await Artbook.find().sort({ createdAt: -1 });
};

export const getArtbookById = async (id) => {
  return await Artbook.findById(id);
};

export const deleteArtbook = async (id) => {
  return await Artbook.findByIdAndDelete(id);
};

export default {
  createArtbook,
  getAllArtbooks,
  getArtbookById,
  deleteArtbook
};