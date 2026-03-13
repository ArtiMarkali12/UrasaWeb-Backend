const validateCustomEnvelope = (req, res, next) => {
  const { sizeStandard, paperTypeAndWeight, styleAndFeatures, printingAndQuantity, customerDetails } = req.body;

  // Validate size standard
  if (!sizeStandard || !sizeStandard.size) {
    return res.status(400).json({
      success: false,
      message: "Size is required"
    });
  }

  // Validate paper type and weight
  if (!paperTypeAndWeight) {
    return res.status(400).json({
      success: false,
      message: "Paper type and weight details are required"
    });
  }

  if (!paperTypeAndWeight.paperMaterial) {
    return res.status(400).json({
      success: false,
      message: "Paper material is required"
    });
  }

  if (!paperTypeAndWeight.gsmWeight) {
    return res.status(400).json({
      success: false,
      message: "GSM weight is required"
    });
  }

  // Validate style and features
  if (!styleAndFeatures) {
    return res.status(400).json({
      success: false,
      message: "Style and features details are required"
    });
  }

  if (!styleAndFeatures.sealType) {
    return res.status(400).json({
      success: false,
      message: "Seal type is required"
    });
  }

  // Validate printing and quantity
  if (!printingAndQuantity) {
    return res.status(400).json({
      success: false,
      message: "Printing and quantity details are required"
    });
  }

  if (!printingAndQuantity.printColors) {
    return res.status(400).json({
      success: false,
      message: "Print colors is required"
    });
  }

  if (!printingAndQuantity.quantityRequired) {
    return res.status(400).json({
      success: false,
      message: "Quantity required is required"
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

export default validateCustomEnvelope;