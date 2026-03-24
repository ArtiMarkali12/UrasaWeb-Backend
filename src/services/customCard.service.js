import CustomCard from "../models/customCard.model.js";

export const createCustomCard = async (data) => {
  const customCard = new CustomCard(data);
  return await customCard.save();
};

export const getAllCustomCards = async () => {
  return await CustomCard.find().sort({ createdAt: -1 });
};

export const getCustomCardById = async (id) => {
  return await CustomCard.findById(id);
};

export const updateCustomCard = async (id, data) => {
  return await CustomCard.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCustomCard = async (id) => {
  return await CustomCard.findByIdAndDelete(id);
};

export default {
  createCustomCard,
  getAllCustomCards,
  getCustomCardById,
  updateCustomCard,
  deleteCustomCard,
};
