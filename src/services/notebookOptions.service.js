import NotebookOptions from "../models/notebookOptions.model.js";

export const getAllOptions = async () => {

  let options = await NotebookOptions.findOne();

  if (!options) {
    options = await NotebookOptions.create({
      notebookSizes: [],
      bindingStyles: [],
      numberOfPages: [],
      pageRulings: [],
      coverTypes: [],
      coverFinishes: []
    });
  }

  return options;
};

export const addOptionValue = async (category,value)=>{

  const options = await getAllOptions();

  if(!options[category]){
    throw new Error(`Invalid category: ${category}`);
  }

  if(options[category].includes(value)){
    throw new Error(`Value already exists`);
  }

  options[category].push(value);

  await options.save();

  return options;

};

export const updateOptionValue = async (category,index,newValue)=>{

  const options = await getAllOptions();

  options[category][index] = newValue;

  await options.save();

  return options;

};

export const deleteOptionValue = async (category,index)=>{

  const options = await getAllOptions();

  options[category].splice(index,1);

  await options.save();

  return options;

};

export default {
  getAllOptions,
  addOptionValue,
  updateOptionValue,
  deleteOptionValue
};