import shoppingBagsService from "../services/shoppingBags.service.js";

export const createShoppingBagQuote = async (req, res) => {
  try {
    const data = req.body;

    if (req.files) {
      data.files = req.files.map((file) => file.path);
    }

    const bag = await shoppingBagsService.createShoppingBagQuote(data);

    res.status(201).json({
      success: true,
      message: "Shopping bag quote  created successfully",
      data: bag,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllShoppingBags = async (req, res) => {
  const bags = await shoppingBagsService.getAllShoppingBags();

  res.status(200).json({
    success: true,
    data: bags,
  });
};

export const getShoppingBagById = async (req, res) => {
  const bag = await shoppingBagsService.getShoppingBagById(req.params.id);

  res.status(200).json({
    success: true,
    data: bag,
  });
};

export const deleteShoppingBag = async (req, res) => {
  await shoppingBagsService.deleteShoppingBag(req.params.id);

  res.status(200).json({
    success: true,
    message: "Shopping bag deleted successfully",
  });
};

export const updateShoppingBag = async (req, res) => {
  try {
    const data = req.body;

    const shoppingBag = await shoppingBagsService.updateShoppingBag(
      req.params.id,
      data,
    );

    if (!shoppingBag) {
      return res.status(404).json({
        success: false,
        message: "Shopping bag quote not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Shopping bag quote updated successfully",
      data: shoppingBag,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating shopping bag quote",
      error: error.message,
    });
  }
};

export default {
  createShoppingBagQuote,
  getAllShoppingBags,
  getShoppingBagById,
  updateShoppingBag,
  deleteShoppingBag,
};
