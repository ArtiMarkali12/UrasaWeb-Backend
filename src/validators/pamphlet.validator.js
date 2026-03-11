const validatePamphletQuote = (req, res, next) => {
  const {
    formatAndFoldingStyle,
    size,
    paperStock,
    printingAndFinishes,
    quantity,
    customerDetails,
  } = req.body;

  // Validate required fields
  if (!formatAndFoldingStyle) {
    return res.status(400).json({
      success: false,
      message: "Format & folding style is required",
    });
  }

  if (!size) {
    return res.status(400).json({
      success: false,
      message: "Size is required",
    });
  }

  // Validate paper stock
  if (!paperStock) {
    return res.status(400).json({
      success: false,
      message: "Paper stock is required",
    });
  }

  if (!paperStock.paperWeight) {
    return res.status(400).json({
      success: false,
      message: "Paper weight is required",
    });
  }

  if (!paperStock.paperType) {
    return res.status(400).json({
      success: false,
      message: "Paper type is required",
    });
  }

  // Validate printing & finishes
  if (!printingAndFinishes) {
    return res.status(400).json({
      success: false,
      message: "Printing & finishes details are required",
    });
  }

  if (!printingAndFinishes.printedSides) {
    return res.status(400).json({
      success: false,
      message: "Printed sides is required",
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

export default validatePamphletQuote;
