import BookletQuote from "../models/bookletQuote.model.js";

export const createQuoteService = async (data) => {

  const quote = new BookletQuote(data);

  return await quote.save();

};



export const getAllQuotesService = async () => {

  return await BookletQuote.find().sort({ createdAt: -1 });

};



export const getQuoteByIdService = async (id) => {

  return await BookletQuote.findById(id);

};