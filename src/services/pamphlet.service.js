import Pamphlet from "../models/pamphlet.model.js";

export const createPamphlet = async (data) => {
  const pamphlet = new Pamphlet(data);
  return await pamphlet.save();
};

export const getAllPamphlets = async () => {
  return await Pamphlet.find().sort({ createdAt: -1 });
};

export const getPamphletById = async (id) => {
  return await Pamphlet.findById(id);
};

export const updatePamphlet = async (id, data) => {
  return await Pamphlet.findByIdAndUpdate(id, data, { new: true });
};

export const deletePamphlet = async (id) => {
  return await Pamphlet.findByIdAndDelete(id);
};

export default {
  createPamphlet,
  getAllPamphlets,
  getPamphletById,
  updatePamphlet,
  deletePamphlet,
};
