import Booklet from "../models/booklet.model.js";

export const createBooklet = async (data) => {
  const booklet = new Booklet(data);
  return await booklet.save();
};

export const getAllBooklets = async () => {
  return await Booklet.find().sort({ createdAt: -1 });
};

export const getBookletById = async (id) => {
  return await Booklet.findById(id);
};

export const deleteBooklet = async (id) => {
  return await Booklet.findByIdAndDelete(id);
};

export const updateBooklet = async (id, data) => {
  return await Booklet.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export default {
  createBooklet,
  getAllBooklets,
  getBookletById,
  deleteBooklet,
  updateBooklet,
};
