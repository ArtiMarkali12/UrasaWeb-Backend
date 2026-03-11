import productCatalogueOptionsService from "../services/productCatalogueOptions.service.js";

export const getAllProductCatalogueOptions = async (req, res) => {
  try {
    const options =
      await productCatalogueOptionsService.getAllProductCatalogueOptions();

    res.status(200).json({
      success: true,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching product catalogue options",
      error: error.message,
    });
  }
};

export const addProductCatalogueOptionValue = async (req, res, field) => {
  try {
    const { value } = req.body;

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required",
      });
    }

    const options =
      await productCatalogueOptionsService.addProductCatalogueOptionValue(
        field,
        value,
      );

    res.status(201).json({
      success: true,
      message: `${field} added successfully`,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding product catalogue option",
      error: error.message,
    });
  }
};

export const updateProductCatalogueOptionValue = async (req, res, field) => {
  try {
    const { value } = req.body;
    const index = parseInt(req.params.index);

    if (!value) {
      return res.status(400).json({
        success: false,
        message: "Value is required",
      });
    }

    if (isNaN(index)) {
      return res.status(400).json({
        success: false,
        message: "Invalid index",
      });
    }

    const options =
      await productCatalogueOptionsService.updateProductCatalogueOptionValue(
        field,
        index,
        value,
      );

    if (!options) {
      return res.status(404).json({
        success: false,
        message: "Option not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `${field} updated successfully`,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating product catalogue option",
      error: error.message,
    });
  }
};

export const deleteProductCatalogueOptionValue = async (req, res, field) => {
  try {
    const index = parseInt(req.params.index);

    if (isNaN(index)) {
      return res.status(400).json({
        success: false,
        message: "Invalid index",
      });
    }

    const options =
      await productCatalogueOptionsService.deleteProductCatalogueOptionValue(
        field,
        index,
      );

    if (!options) {
      return res.status(404).json({
        success: false,
        message: "Option not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `${field} deleted successfully`,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting product catalogue option",
      error: error.message,
    });
  }
};

export default {
  getAllProductCatalogueOptions,
  addProductCatalogueOptionValue,
  updateProductCatalogueOptionValue,
  deleteProductCatalogueOptionValue,
};
