import CustomCardOptions from "../models/customCardOptions.model.js";

export const getAllCustomCardOptions = async () => {
  let options = await CustomCardOptions.findOne();

  if (!options) {
    options = await CustomCardOptions.create({
      cardTypes: [],
      sizes: [],
      paperStocks: [],
      printedSides: [],
      laminations: [],
      corners: [],
      envelopes: []
    });
  }

  return options;
};

export const addCustomCardOptionValue = async (category, value) => {
  const options = await getAllCustomCardOptions();
  
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

export const updateCustomCardOptionValue = async (category, index, newValue) => {
  const options = await getAllCustomCardOptions();
  
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

export const deleteCustomCardOptionValue = async (category, index) => {
  const options = await getAllCustomCardOptions();
  
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
  getAllCustomCardOptions,
  addCustomCardOptionValue,
  updateCustomCardOptionValue,
  deleteCustomCardOptionValue
};