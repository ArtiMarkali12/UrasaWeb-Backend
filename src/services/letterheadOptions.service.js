// import LetterheadOptions from "../models/letterheadOptions.model.js";

// export const getAllOptions = async()=>{

//   let options = await LetterheadOptions.findOne();

//   if(!options){
//     options = await LetterheadOptions.create({});
//   }

//   return options;
// };

// export const addOptionValue = async(category,value)=>{

//   let options = await LetterheadOptions.findOne();

//   if(!options){
//     options = await LetterheadOptions.create({});
//   }

//   if(!options[category]){
//     throw new Error(`Invalid category: ${category}`);
//   }

//   options[category].push(value);

//   await options.save();

//   return options;
// };

// export default {
//   getAllOptions,
//   addOptionValue
// };

import LetterheadOptions from "../models/letterheadOptions.model.js";

export const getAllOptions = async ()=>{

  let options = await LetterheadOptions.findOne();

  if(!options){

    options = await LetterheadOptions.create({
      sizeStandards:[],
      paperTypes:[],
      paperWeights:[],
      printColors:[],
      specialFinishes:[]
    });

  }

  return options;
};

export const addOptionValue = async (category,value)=>{

  const options = await getAllOptions();

  if(!options[category]){
    throw new Error("Invalid category");
  }

  if(options[category].includes(value)){
    throw new Error("Value already exists");
  }

  options[category].push(value);

  await options.save();

  return options;
};

/* PUT */

export const updateOptionValue = async (category,index,newValue)=>{

  const options = await getAllOptions();

  options[category][index] = newValue;

  await options.save();

  return options;
};

/* DELETE */

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