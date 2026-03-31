const validateArtbook = (req, res, next) => {
  const {
    bookFormatAndBinding,
    paperSelection,
    quantityRequired,
    customerDetails,
  } = req.body;

  // Validate book format and binding
  if (!bookFormatAndBinding) {
    return res.status(400).json({
      success: false,
      message: "Book format and binding details are required",
    });
  }

  if (!bookFormatAndBinding.size) {
    return res.status(400).json({
      success: false,
      message: "Book size is required",
    });
  }

  if (!bookFormatAndBinding.bindingStyle) {
    return res.status(400).json({
      success: false,
      message: "Binding style is required",
    });
  }

  if (!bookFormatAndBinding.numberOfPages) {
    return res.status(400).json({
      success: false,
      message: "Number of pages is required",
    });
  }

  // Validate paper selection
  if (!paperSelection) {
    return res.status(400).json({
      success: false,
      message: "Paper selection details are required",
    });
  }

  if (!paperSelection.paperType) {
    return res.status(400).json({
      success: false,
      message: "Paper type is required",
    });
  }

  if (!paperSelection.paperWeight) {
    return res.status(400).json({
      success: false,
      message: "Paper weight is required",
    });
  }

  // Validate quantity
  if (!quantityRequired) {
    return res.status(400).json({
      success: false,
      message: "Quantity required is required",
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

export default validateArtbook;
