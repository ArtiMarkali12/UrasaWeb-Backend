const validateNotebookQuote = (req, res, next) => {
  const { quantity, notebookDetails, customerDetails } = req.body;

  // Validate required fields
  if (!quantity) {
    return res.status(400).json({
      success: false,
      message: "Quantity is required",
    });
  }

  if (!notebookDetails) {
    return res.status(400).json({
      success: false,
      message: "Notebook details are required",
    });
  }

  if (!notebookDetails.size) {
    return res.status(400).json({
      success: false,
      message: "Notebook size is required",
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

  // Phone is now optional - removed validation

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

export default validateNotebookQuote;
