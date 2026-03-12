const validateNotebookQuote = (req,res,next)=>{

  const {quantity,notebookDetails,customerDetails} = req.body;

  if(!quantity){
    return res.status(400).json({success:false,message:"Quantity required"});
  }

  if(!notebookDetails?.size){
    return res.status(400).json({success:false,message:"Notebook size required"});
  }

  if(!customerDetails?.name){
    return res.status(400).json({success:false,message:"Customer name required"});
  }

  next();

};

export default validateNotebookQuote;