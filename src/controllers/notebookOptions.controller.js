



import optionsService from "../services/notebookOptions.service.js";

/* GET */

export const getAllOptions = async (req,res)=>{

  const options = await optionsService.getAllOptions();

  res.status(200).json({
    success:true,
    data:options
  });

};

/* POST */

export const addOptionValue = async (req,res,category)=>{

  try{

    const {value} = req.body;

    const options = await optionsService.addOptionValue(category,value);

    res.status(201).json({
      success:true,
      data:options
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};

/* PUT */

export const updateOptionValue = async (req,res,category)=>{

  try{

    const index = req.params.index;
    const {newValue} = req.body;

    const options = await optionsService.updateOptionValue(category,index,newValue);

    res.status(200).json({
      success:true,
      data:options
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};

/* DELETE */

export const deleteOptionValue = async (req,res,category)=>{

  try{

    const index = req.params.index;

    const options = await optionsService.deleteOptionValue(category,index);

    res.status(200).json({
      success:true,
      data:options
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};
export default {
  getAllOptions,
  addOptionValue,
  updateOptionValue,
  deleteOptionValue
};