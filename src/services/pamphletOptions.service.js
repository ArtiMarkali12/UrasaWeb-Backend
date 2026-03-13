import PamphletOptions from "../models/pamphletOptions.model.js";

export const getAllPamphletOptions = async () => {
  let options = await PamphletOptions.findOne();

  if (!options) {
    options = new PamphletOptions({
      formatAndFoldingStyles: [],
      sizes: [],
      paperWeights: [],
      paperTypes: [],
      printedSides: [],
      laminations: [],
    });
    await options.save();
  }

  return options;
};

export const addPamphletOptionValue = async (field, value) => {
  const options = await getAllPamphletOptions();
  options[field].push(value);
  return await options.save();
};

export const updatePamphletOptionValue = async (field, index, value) => {
  const options = await getAllPamphletOptions();
  if (options[field][index] !== undefined) {
    options[field][index] = value;
    return await options.save();
  }
  return null;
};

export const deletePamphletOptionValue = async (field, index) => {
  const options = await getAllPamphletOptions();
  if (options[field][index] !== undefined) {
    options[field].splice(index, 1);
    return await options.save();
  }
  return null;
};

export default {
  getAllPamphletOptions,
  addPamphletOptionValue,
  updatePamphletOptionValue,
  deletePamphletOptionValue,
};
