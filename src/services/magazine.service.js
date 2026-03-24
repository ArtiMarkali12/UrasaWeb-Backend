import Magazine from "../models/magazine.model.js";

export const createMagazine = async (data) => {
  const magazine = new Magazine(data);
  return await magazine.save();
};

export const getAllMagazines = async () => {
  return await Magazine.find().sort({ createdAt: -1 });
};

export const getMagazineById = async (id) => {
  return await Magazine.findById(id);
};

export const updateMagazine = async (id, data) => {
  return await Magazine.findByIdAndUpdate(id, data, { new: true });
};

export const deleteMagazine = async (id) => {
  return await Magazine.findByIdAndDelete(id);
};

export default {
  createMagazine,
  getAllMagazines,
  getMagazineById,
  updateMagazine,
  deleteMagazine,
};
