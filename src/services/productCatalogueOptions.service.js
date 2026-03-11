import ProductCatalogueOptions from "../models/productCatalogueOptions.model.js";

export const getAllProductCatalogueOptions = async () => {
  let options = await ProductCatalogueOptions.findOne();

  if (!options) {
    options = new ProductCatalogueOptions({
      finishedSizesClosed: [],
      bindingMethods: [],
      coverPapersHeavy: [],
      innerPagesText: [],
      printColors: [],
      totalNumberOfPages: [],
      coverFinishesExtras: [],
    });
    await options.save();
  }

  return options;
};

export const addProductCatalogueOptionValue = async (field, value) => {
  const options = await getAllProductCatalogueOptions();
  options[field].push(value);
  return await options.save();
};

export const updateProductCatalogueOptionValue = async (
  field,
  index,
  value,
) => {
  const options = await getAllProductCatalogueOptions();
  if (options[field][index] !== undefined) {
    options[field][index] = value;
    return await options.save();
  }
  return null;
};

export const deleteProductCatalogueOptionValue = async (field, index) => {
  const options = await getAllProductCatalogueOptions();
  if (options[field][index] !== undefined) {
    options[field].splice(index, 1);
    return await options.save();
  }
  return null;
};

export default {
  getAllProductCatalogueOptions,
  addProductCatalogueOptionValue,
  updateProductCatalogueOptionValue,
  deleteProductCatalogueOptionValue,
};
