import BrochureOptions from "../models/brochureOptions.model.js";

export const getAllBrochureOptions = async () => {
  let options = await BrochureOptions.findOne();

  if (!options) {
    options = new BrochureOptions({
      foldStyles: [],
      sizes: [],
      paperStocks: [],
      finishingTypes: [],
    });
    await options.save();
  }

  return options;
};

export const addBrochureOptionValue = async (field, value) => {
  const options = await getAllBrochureOptions();
  options[field].push(value);
  return await options.save();
};

export const updateBrochureOptionValue = async (field, index, value) => {
  const options = await getAllBrochureOptions();
  if (options[field][index] !== undefined) {
    options[field][index] = value;
    return await options.save();
  }
  return null;
};

export const deleteBrochureOptionValue = async (field, index) => {
  const options = await getAllBrochureOptions();
  if (options[field][index] !== undefined) {
    options[field].splice(index, 1);
    return await options.save();
  }
  return null;
};

export default {
  getAllBrochureOptions,
  addBrochureOptionValue,
  updateBrochureOptionValue,
  deleteBrochureOptionValue,
};
