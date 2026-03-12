import LedgerRegister from "../models/ledgerRegister.model.js";

export const createLedgerRegister = async (data)=>{
  const register = new LedgerRegister(data);
  return await register.save();
};

export const getAllLedgerRegisters = async ()=>{
  return await LedgerRegister.find().sort({createdAt:-1});
};

export const getLedgerRegisterById = async (id)=>{
  return await LedgerRegister.findById(id);
};

export const deleteLedgerRegister = async (id)=>{
  return await LedgerRegister.findByIdAndDelete(id);
};

export default {
  createLedgerRegister,
  getAllLedgerRegisters,
  getLedgerRegisterById,
  deleteLedgerRegister
};