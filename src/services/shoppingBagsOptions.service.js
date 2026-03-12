import ShoppingBagsOptions from "../models/shoppingBagsOptions.model.js";

export const getAllOptions = async()=>{

  let options = await ShoppingBagsOptions.findOne();

  if(!options){

    options = await ShoppingBagsOptions.create({
      bagTypes:[],
      standardSizes:[],
      printColors:[],
      finishingTypes:[]
    });

  }

  return options;

};

export const addOptionValue = async(category,value)=>{

  const options = await getAllOptions();

  options[category].push(value);

  await options.save();

  return options;

};

export const updateOptionValue = async(category,index,newValue)=>{

  const options = await getAllOptions();

  options[category][index] = newValue;

  await options.save();

  return options;

};

export const deleteOptionValue = async(category,index)=>{

  const options = await getAllOptions();

  options[category].splice(index,1);

  await options.save();

  return options;

};

export default{
  getAllOptions,
  addOptionValue,
  updateOptionValue,
  deleteOptionValue
};