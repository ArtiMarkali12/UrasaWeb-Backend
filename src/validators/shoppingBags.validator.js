export default function validateShoppingBag(req,res,next){

  const {bagTypeMaterial,quantity,customerDetails} = req.body;

  if(!bagTypeMaterial){
    return res.status(400).json({
      success:false,
      message:"Bag type required"
    });
  }

  if(!quantity){
    return res.status(400).json({
      success:false,
      message:"Quantity required"
    });
  }

  if(!customerDetails){
    return res.status(400).json({
      success:false,
      message:"Customer details required"
    });
  }

  next();

}