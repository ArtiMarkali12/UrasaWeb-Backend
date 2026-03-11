const validateBusinessCard = (req, res, next) => {
  const { basicsAndDimensions, paperAndMaterial, customerDetails } = req.body;

  // Validate basics and dimensions
  if (!basicsAndDimensions) {
    return res.status(400).json({
      success: false,
      message: "Basics and dimensions details are required"
    });
  }

  if (!basicsAndDimensions.projectName) {
    return res.status(400).json({
      success: false,
      message: "Project name is required"
    });
  }

  if (!basicsAndDimensions.quantity) {
    return res.status(400).json({
      success: false,
      message: "Quantity is required"
    });
  }

  if (!basicsAndDimensions.numberOfDifferentNames) {
    return res.status(400).json({
      success: false,
      message: "Number of different names is required"
    });
  }

  if (!basicsAndDimensions.cardSize) {
    return res.status(400).json({
      success: false,
      message: "Card size is required"
    });
  }

  if (!basicsAndDimensions.orientation) {
    return res.status(400).json({
      success: false,
      message: "Orientation is required"
    });
  }

  if (!["portrait", "landscape"].includes(basicsAndDimensions.orientation)) {
    return res.status(400).json({
      success: false,
      message: "Orientation must be either 'portrait' or 'landscape'"
    });
  }

  // Validate paper and material
  if (!paperAndMaterial) {
    return res.status(400).json({
      success: false,
      message: "Paper and material details are required"
    });
  }

  if (!paperAndMaterial.paperStock) {
    return res.status(400).json({
      success: false,
      message: "Paper stock is required"
    });
  }

  if (!paperAndMaterial.printingSides) {
    return res.status(400).json({
      success: false,
      message: "Printing sides is required"
    });
  }

  // Validate customer details
  if (!customerDetails) {
    return res.status(400).json({
      success: false,
      message: "Customer details are required"
    });
  }

  if (!customerDetails.name) {
    return res.status(400).json({
      success: false,
      message: "Customer name is required"
    });
  }

  if (!customerDetails.email) {
    return res.status(400).json({
      success: false,
      message: "Customer email is required"
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(customerDetails.email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  if (!customerDetails.phone) {
    return res.status(400).json({
      success: false,
      message: "Customer phone is required"
    });
  }

  // Validate timeline dates if provided
  if (req.body.timeline) {
    const { orderDate, expectedDate, deliveryDate } = req.body.timeline;

    if (orderDate && expectedDate && new Date(orderDate) > new Date(expectedDate)) {
      return res.status(400).json({
        success: false,
        message: "Order date cannot be after expected date"
      });
    }

    if (expectedDate && deliveryDate && new Date(expectedDate) > new Date(deliveryDate)) {
      return res.status(400).json({
        success: false,
        message: "Expected date cannot be after delivery date"
      });
    }
  }

  next();
};

export default validateBusinessCard;