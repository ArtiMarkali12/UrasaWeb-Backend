import letterheadService from "../services/letterhead.service.js";

export const createLetterheadQuote = async(req,res)=>{
  try{

    const data = req.body;

    if(req.files){
      data.files = req.files.map(file=>file.path);
    }

    const letterhead = await letterheadService.createLetterheadQuote(data);

    res.status(201).json({
      success:true,
      message:"Letterhead quote created successfully",
      data:letterhead
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

export const getAllLetterheads = async(req,res)=>{

  const letterheads = await letterheadService.getAllLetterheads();

  res.status(200).json({
    success:true,
    data:letterheads
  });
};

export const getLetterheadById = async(req,res)=>{

  const letterhead = await letterheadService.getLetterheadById(req.params.id);

  res.status(200).json({
    success:true,
    data:letterhead
  });
};

export const deleteLetterhead = async(req,res)=>{

  await letterheadService.deleteLetterhead(req.params.id);

  res.status(200).json({
    success:true,
    message:"Letterhead deleted successfully"
  });
};

export default {
  createLetterheadQuote,
  getAllLetterheads,
  getLetterheadById,
  deleteLetterhead
};