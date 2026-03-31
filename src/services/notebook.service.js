import Notebook from "../models/notebook.model.js";

export const createNotebook = async (data) => {
  const notebook = new Notebook(data);
  return await notebook.save();
};

export const getAllNotebooks = async () => {
  return await Notebook.find().sort({ createdAt: -1 });
};

export const getNotebookById = async (id) => {
  return await Notebook.findById(id);
};

export const deleteNotebook = async (id) => {
  return await Notebook.findByIdAndDelete(id);
};

export const updateNotebook = async (id, data) => {
  return await Notebook.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export default {
  createNotebook,
  getAllNotebooks,
  getNotebookById,
  deleteNotebook,
  updateNotebook,
};
