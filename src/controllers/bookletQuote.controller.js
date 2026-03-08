import {
  createQuoteService,
  getAllQuotesService,
  getQuoteByIdService
} from "../services/bookletQuote.service.js";

export const createBookletQuote = async (req, res) => {
  try {

    const data = await createQuoteService(req.body);

    res.status(201).json({
      success: true,
      message: "Booklet quote created successfully",
      data
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};



export const getAllQuotes = async (req, res) => {

  try {

    const quotes = await getAllQuotesService();

    res.status(200).json({
      success: true,
      data: quotes
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};



export const getQuoteById = async (req, res) => {

  try {

    const quote = await getQuoteByIdService(req.params.id);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found"
      });
    }

    res.status(200).json({
      success: true,
      data: quote
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};