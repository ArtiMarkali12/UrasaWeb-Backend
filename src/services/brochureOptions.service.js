import BrochureOptions from "../models/brochureOptions.model.js";

export const getAllBrochureOptions = async () => {
  let options = await BrochureOptions.findOne();

  if (!options) {
    options = await BrochureOptions.create({
      categories: new Map(),
    });
  }

  return options;
};

export const addBrochureOptionValue = async (category, value) => {
  const options = await getAllBrochureOptions();

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

export const updateBrochureOptionValue = async (category, index, newValue) => {
  const options = await getAllBrochureOptions();

  if (!options[category]) {
    throw new Error(`Invalid category: ${category}`);
  }

  if (index < 0 || index >= options[category].length) {
    throw new Error(`Invalid index: ${index}`);
  }

  if (
    options[category].includes(newValue) &&
    options[category][index] !== newValue
  ) {
    throw new Error(`Value already exists in ${category}`);
  }

  options[category][index] = newValue;
  await options.save();

  return options;
};

export const deleteBrochureOptionValue = async (category, index) => {
  const options = await getAllBrochureOptions();

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
  getAllBrochureOptions,
  addBrochureOptionValue,
  updateBrochureOptionValue,
  deleteBrochureOptionValue,
};
