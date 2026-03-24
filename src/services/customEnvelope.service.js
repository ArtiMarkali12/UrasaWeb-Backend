import CustomEnvelope from "../models/customEnvelope.model.js";

export const createCustomEnvelope = async (data) => {
  const customEnvelope = new CustomEnvelope(data);
  return await customEnvelope.save();
};

export const getAllCustomEnvelopes = async () => {
  return await CustomEnvelope.find().sort({ createdAt: -1 });
};

export const getCustomEnvelopeById = async (id) => {
  return await CustomEnvelope.findById(id);
};

export const updateCustomEnvelope = async (id, data) => {
  return await CustomEnvelope.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCustomEnvelope = async (id) => {
  return await CustomEnvelope.findByIdAndDelete(id);
};

export default {
  createCustomEnvelope,
  getAllCustomEnvelopes,
  getCustomEnvelopeById,
  updateCustomEnvelope,
  deleteCustomEnvelope,
};
