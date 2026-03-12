import optionsService from "../services/shoppingBagsOptions.service.js";

export const getAllOptions = async(req,res)=>{

  const options = await optionsService.getAllOptions();

  res.status(200).json({
    success:true,
    data:options
  });

};

export const addOptionValue = async(req,res,category)=>{

  const {value} = req.body;

  const options = await optionsService.addOptionValue(category,value);

  res.status(201).json({
    success:true,
    data:options
  });

};

export const updateOptionValue = async(req,res,category)=>{

  const index = req.params.index;

  const {newValue} = req.body;

  const options = await optionsService.updateOptionValue(category,index,newValue);

  res.status(200).json({
    success:true,
    data:options
  });

};

export const deleteOptionValue = async(req,res,category)=>{

  const index = req.params.index;

  const options = await optionsService.deleteOptionValue(category,index);

  res.status(200).json({
    success:true,
    data:options
  });

};

export default{
  getAllOptions,
  addOptionValue,
  updateOptionValue,
  deleteOptionValue
};