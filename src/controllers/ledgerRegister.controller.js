import ledgerService from "../services/ledgerRegister.service.js";

export const createLedgerRegisterQuote = async (req,res)=>{

  try{

    const data = req.body;

    if(req.files){
      data.files = req.files.map(file=>file.path);
    }

    const register = await ledgerService.createLedgerRegister(data);

    res.status(201).json({
      success:true,
      message:"Ledger register quote created successfully",
      data:register
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};

export const getAllLedgerRegisters = async (req,res)=>{

  const registers = await ledgerService.getAllLedgerRegisters();

  res.status(200).json({
    success:true,
    data:registers
  });

};

export const getLedgerRegisterById = async (req,res)=>{

  const register = await ledgerService.getLedgerRegisterById(req.params.id);

  res.status(200).json({
    success:true,
    data:register
  });

};

export const deleteLedgerRegister = async (req,res)=>{

  await ledgerService.deleteLedgerRegister(req.params.id);

  res.status(200).json({
    success:true,
    message:"Ledger register deleted successfully"
  });

};

export default {
  createLedgerRegisterQuote,
  getAllLedgerRegisters,
  getLedgerRegisterById,
  deleteLedgerRegister
};