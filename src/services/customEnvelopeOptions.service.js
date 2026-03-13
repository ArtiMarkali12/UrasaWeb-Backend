import CustomEnvelopeOptions from "../models/customEnvelopeOptions.model.js";

export const getAllCustomEnvelopeOptions = async () => {
  let options = await CustomEnvelopeOptions.findOne();

  if (!options) {
    options = await CustomEnvelopeOptions.create({
      sizes: [],
      paperMaterials: [],
      gsmWeights: [],
      sealTypes: [],
      windowOptions: [],
      printColors: []
    });
  }

  return options;
};

export const addCustomEnvelopeOptionValue = async (category, value) => {
  const options = await getAllCustomEnvelopeOptions();
  
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

export const updateCustomEnvelopeOptionValue = async (category, index, newValue) => {
  const options = await getAllCustomEnvelopeOptions();
  
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

export const deleteCustomEnvelopeOptionValue = async (category, index) => {
  const options = await getAllCustomEnvelopeOptions();
  
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
  getAllCustomEnvelopeOptions,
  addCustomEnvelopeOptionValue,
  updateCustomEnvelopeOptionValue,
  deleteCustomEnvelopeOptionValue
};