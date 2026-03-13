import Brochure from "../models/brochure.model.js";

export const createBrochure = async (data) => {
  const brochure = new Brochure(data);
  return await brochure.save();
};

export const getAllBrochures = async () => {
  return await Brochure.find().sort({ createdAt: -1 });
};

export const getBrochureById = async (id) => {
  return await Brochure.findById(id);
};

export const deleteBrochure = async (id) => {
  return await Brochure.findByIdAndDelete(id);
};

export default {
  createBrochure,
  getAllBrochures,
  getBrochureById,
  deleteBrochure,
};
