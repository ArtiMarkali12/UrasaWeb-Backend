import productCatalogueService from "../services/productCatalogue.service.js";

export const createProductCatalogueQuote = async (req, res) => {
  try {
    const data = req.body;

    if (req.files) {
      data.files = req.files.map((file) => file.path);
    }

    const productCatalogue =
      await productCatalogueService.createProductCatalogue(data);

    res.status(201).json({
      success: true,
      message: "Product catalogue quote created successfully",
      data: productCatalogue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating product catalogue quote",
      error: error.message,
    });
  }
};

export const getAllProductCatalogues = async (req, res) => {
  try {
    const productCatalogues =
      await productCatalogueService.getAllProductCatalogues();

    res.status(200).json({
      success: true,
      data: productCatalogues,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching product catalogue quotes",
    });
  }
};

export const getProductCatalogueById = async (req, res) => {
  try {
    const productCatalogue =
      await productCatalogueService.getProductCatalogueById(req.params.id);

    if (!productCatalogue) {
      return res.status(404).json({
        success: false,
        message: "Product catalogue quote not found",
      });
    }

    res.status(200).json({
      success: true,
      data: productCatalogue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching product catalogue quote",
    });
  }
};

export const deleteProductCatalogue = async (req, res) => {
  try {
    await productCatalogueService.deleteProductCatalogue(req.params.id);

    res.status(200).json({
      success: true,
      message: "Product catalogue quote deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting product catalogue quote",
    });
  }
};

export const updateProductCatalogue = async (req, res) => {
  try {
    const data = req.body;

    const productCatalogue =
      await productCatalogueService.updateProductCatalogue(req.params.id, data);

    if (!productCatalogue) {
      return res.status(404).json({
        success: false,
        message: "Product catalogue quote not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product catalogue quote updated successfully",
      data: productCatalogue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating product catalogue quote",
      error: error.message,
    });
  }
};

export default {
  createProductCatalogueQuote,
  getAllProductCatalogues,
  getProductCatalogueById,
  updateProductCatalogue,
  deleteProductCatalogue,
};
