export default function validateLetterheadQuote(req,res,next){

  const {sizePaperStandards,quantityDetails,customerDetails} = req.body;

  if(!sizePaperStandards){
    return res.status(400).json({
      success:false,
      message:"Size and paper standards required"
    });
  }

  if(!quantityDetails){
    return res.status(400).json({
      success:false,
      message:"Quantity required"
    });
  }

  if(!customerDetails){
    return res.status(400).json({
      success:false,
      message:"Customer details is required"
    });
  }

  next();
}