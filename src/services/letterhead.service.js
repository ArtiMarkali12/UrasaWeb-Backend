import Letterhead from "../models/letterhead.model.js";

export const createLetterheadQuote = async (data) => {
  const letterhead = new Letterhead(data);
  return await letterhead.save();
};

export const getAllLetterheads = async () => {
  return await Letterhead.find().sort({ createdAt: -1 });
};

export const getLetterheadById = async (id) => {
  return await Letterhead.findById(id);
};

export const updateLetterhead = async (id, data) => {
  return await Letterhead.findByIdAndUpdate(id, data, { new: true });
};

export const deleteLetterhead = async (id) => {
  return await Letterhead.findByIdAndDelete(id);
};

export default {
  createLetterheadQuote,
  getAllLetterheads,
  getLetterheadById,
  updateLetterhead,
  deleteLetterhead,
};
