const validateBookletQuote = (req, res, next) => {

  const { generalDetails, bindingStyle, interiorSpecifications } = req.body;

  if (!generalDetails || !bindingStyle || !interiorSpecifications) {
    return res.status(400).json({
      success: false,
      message: "Required sections are missing"
    });
  }

  if (!generalDetails.quantity) {
    return res.status(400).json({
      success: false,
      message: "Quantity is required"
    });
  }

  if (!interiorSpecifications.numberOfPages) {
    return res.status(400).json({
      success: false,
      message: "Number of pages is required"
    });
  }

  next();
};

export default validateBookletQuote;