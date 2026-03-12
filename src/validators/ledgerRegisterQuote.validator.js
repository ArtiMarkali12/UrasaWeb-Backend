const validateLedgerRegister = (req,res,next)=>{

  const {registerDetails,quantity,customerDetails} = req.body;

  // if(!registerDetails?.ledgerSize){
  //   return res.status(400).json({
  //     success:false,
  //     message:"Ledger size required"
  //   });
  // }

  if(!registerDetails?.size){
  return res.status(400).json({
    success:false,
    message:"Register size required"
  });
}

  if(!quantity){
    return res.status(400).json({
      success:false,
      message:"Quantity required"
    });
  }

  if(!customerDetails?.name){
    return res.status(400).json({
      success:false,
      message:"Customer name required"
    });
  }

  next();
};

export default validateLedgerRegister;