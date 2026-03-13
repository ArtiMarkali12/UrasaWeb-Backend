const validateCustomCard = (req, res, next) => {
  const { selectCardTypeAndSize, paperAndQuantity, printingAndFinish, customerDetails } = req.body;

  // Validate card type and size
  if (!selectCardTypeAndSize) {
    return res.status(400).json({
      success: false,
      message: "Card type and size details are required"
    });
  }

  if (!selectCardTypeAndSize.selectCard) {
    return res.status(400).json({
      success: false,
      message: "Card type is required"
    });
  }

  if (!selectCardTypeAndSize.size) {
    return res.status(400).json({
      success: false,
      message: "Size is required"
    });
  }

  // Validate paper and quantity
  if (!paperAndQuantity) {
    return res.status(400).json({
      success: false,
      message: "Paper and quantity details are required"
    });
  }

  if (!paperAndQuantity.paperStock) {
    return res.status(400).json({
      success: false,
      message: "Paper stock is required"
    });
  }

  if (!paperAndQuantity.quantity) {
    return res.status(400).json({
      success: false,
      message: "Quantity is required"
    });
  }

  // Validate printing and finish
  if (!printingAndFinish) {
    return res.status(400).json({
      success: false,
      message: "Printing and finish details are required"
    });
  }

  if (!printingAndFinish.printedSides) {
    return res.status(400).json({
      success: false,
      message: "Printed sides is required"
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

export default validateCustomCard;