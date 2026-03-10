import Options from "../models/options.model.js";

export const getAllOptions = async () => {
  let options = await Options.findOne();

  if (!options) {
    options = await Options.create({
      bookSizes: [],
      bindingTypes: [],
      coverStyles: [],
      printColors: [],
      paperWeights: [],
      paperTypes: [],
      coverFinishes: [],
      pageEdges: [],
      packaging: [],
      specialFinishing: []
    });
  }

  return options;
};

export const addOptionValue = async (category, value) => {
  const options = await getAllOptions();
  
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

export const updateOptionValue = async (category, index, newValue) => {
  const options = await getAllOptions();
  
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

export const deleteOptionValue = async (category, index) => {
  const options = await getAllOptions();
  
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
  getAllOptions,
  addOptionValue,
  updateOptionValue,
  deleteOptionValue
};
