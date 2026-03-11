import ArtbookOptions from "../models/artbookOptions.model.js";

export const getAllArtbookOptions = async () => {
  let options = await ArtbookOptions.findOne();

  if (!options) {
    options = await ArtbookOptions.create({
      sizes: [],
      bindingStyles: [],
      numberOfPages: [],
      paperTypes: [],
      paperWeights: [],
      coverMaterials: [],
      features: []
    });
  }

  return options;
};

export const addArtbookOptionValue = async (category, value) => {
  const options = await getAllArtbookOptions();
  
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

export const updateArtbookOptionValue = async (category, index, newValue) => {
  const options = await getAllArtbookOptions();
  
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

export const deleteArtbookOptionValue = async (category, index) => {
  const options = await getAllArtbookOptions();
  
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
  getAllArtbookOptions,
  addArtbookOptionValue,
  updateArtbookOptionValue,
  deleteArtbookOptionValue
};