const validateProductCatalogueQuote = (req, res, next) => {
  const {
    formatAndBindingStyle,
    paperStockSelection,
    pageCountAndColor,
    quantity,
    customerDetails,
  } = req.body;

  // Validate format & binding style
  if (!formatAndBindingStyle) {
    return res.status(400).json({
      success: false,
      message: "Format & binding style is required",
    });
  }

  if (!formatAndBindingStyle.finishedSizeClosed) {
    return res.status(400).json({
      success: false,
      message: "Finished size (closed) is required",
    });
  }

  if (!formatAndBindingStyle.bindingMethod) {
    return res.status(400).json({
      success: false,
      message: "Binding method is required",
    });
  }

  // Validate paper stock selection
  if (!paperStockSelection) {
    return res.status(400).json({
      success: false,
      message: "Paper stock selection is required",
    });
  }

  if (!paperStockSelection.coverPaperHeavy) {
    return res.status(400).json({
      success: false,
      message: "Cover paper (heavy) is required",
    });
  }

  if (!paperStockSelection.innerPagesText) {
    return res.status(400).json({
      success: false,
      message: "Inner pages (text) is required",
    });
  }

  if (!paperStockSelection.printColor) {
    return res.status(400).json({
      success: false,
      message: "Print color is required",
    });
  }

  // Validate page count and color
  if (!pageCountAndColor) {
    return res.status(400).json({
      success: false,
      message: "Page count and color is required",
    });
  }

  if (!pageCountAndColor.totalNumberOfPages) {
    return res.status(400).json({
      success: false,
      message: "Total number of pages is required",
    });
  }

  // Validate quantity
  if (!quantity) {
    return res.status(400).json({
      success: false,
      message: "Quantity is required",
    });
  }

  if (isNaN(quantity) || quantity <= 0) {
    return res.status(400).json({
      success: false,
      message: "Quantity must be a positive number",
    });
  }

  // Validate customer details
  if (!customerDetails) {
    return res.status(400).json({
      success: false,
      message: "Customer details are required",
    });
  }

  if (!customerDetails.name) {
    return res.status(400).json({
      success: false,
      message: "Customer name is required",
    });
  }

  if (!customerDetails.email) {
    return res.status(400).json({
      success: false,
      message: "Customer email is required",
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(customerDetails.email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }

  if (!customerDetails.phone) {
    return res.status(400).json({
      success: false,
      message: "Customer phone is required",
    });
  }

  // Validate timeline dates if provided
  if (req.body.timeline) {
    const { orderDate, expectedDate, deliveryDate } = req.body.timeline;

    if (
      orderDate &&
      expectedDate &&
      new Date(orderDate) > new Date(expectedDate)
    ) {
      return res.status(400).json({
        success: false,
        message: "Order date cannot be after expected date",
      });
    }

    if (
      expectedDate &&
      deliveryDate &&
      new Date(expectedDate) > new Date(deliveryDate)
    ) {
      return res.status(400).json({
        success: false,
        message: "Expected date cannot be after delivery date",
      });
    }
  }

  next();
};

export default validateProductCatalogueQuote;
