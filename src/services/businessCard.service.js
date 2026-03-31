import BusinessCard from "../models/businessCard.model.js";

export const createBusinessCard = async (data) => {
  const businessCard = new BusinessCard(data);
  return await businessCard.save();
};

export const getAllBusinessCards = async () => {
  return await BusinessCard.find().sort({ createdAt: -1 });
};

export const getBusinessCardById = async (id) => {
  return await BusinessCard.findById(id);
};

export const deleteBusinessCard = async (id) => {
  return await BusinessCard.findByIdAndDelete(id);
};

export const updateBusinessCard = async (id, data) => {
  return await BusinessCard.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export default {
  createBusinessCard,
  getAllBusinessCards,
  getBusinessCardById,
  deleteBusinessCard,
  updateBusinessCard,
};
