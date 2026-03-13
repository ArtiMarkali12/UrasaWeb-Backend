import BusinessCardOptions from "../models/businessCardOptions.model.js";

export const getAllBusinessCardOptions = async () => {
  let options = await BusinessCardOptions.findOne();

  if (!options) {
    options = await BusinessCardOptions.create({
      cardSizes: [],
      paperStocks: [],
      paperTextures: [],
      printingSides: [],
      specialEffects: [],
      foilColors: [],
      cornerStyles: [],
      cornerColors: []
    });
  }

  return options;
};

export const addBusinessCardOptionValue = async (category, value) => {
  const options = await getAllBusinessCardOptions();
  
  if (!options[category]) {
    throw new Error(`Invalid category: ${category}`);
  }

  if (options[category].includes(value)) {
    throw new Error(`Value already exists in ${category}`);
  }

  options[category].push(value);
  await options.save();

  return options;
};

export const updateBusinessCardOptionValue = async (category, index, newValue) => {
  const options = await getAllBusinessCardOptions();
  
  if (!options[category]) {
    throw new Error(`Invalid category: ${category}`);
  }

  if (index < 0 || index >= options[category].length) {
    throw new Error(`Invalid index: ${index}`);
  }

  if (options[category].includes(newValue) && options[category][index] !== newValue) {
    throw new Error(`Value already exists in ${category}`);
  }

  options[category][index] = newValue;
  await options.save();

  return options;
};

export const deleteBusinessCardOptionValue = async (category, index) => {
  const options = await getAllBusinessCardOptions();
  
  if (!options[category]) {
    throw new Error(`Invalid category: ${category}`);
  }

  if (index < 0 || index >= options[category].length) {
    throw new Error(`Invalid index: ${index}`);
  }

  options[category].splice(index, 1);
  await options.save();

  return options;
};

export default {
  getAllBusinessCardOptions,
  addBusinessCardOptionValue,
  updateBusinessCardOptionValue,
  deleteBusinessCardOptionValue
};