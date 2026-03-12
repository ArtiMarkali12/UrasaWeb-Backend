import ShoppingBags from "../models/shoppingBags.model.js";

export const createShoppingBagQuote = async(data)=>{

  const bag = await ShoppingBags.create(data);

  return bag;

};

export const getAllShoppingBags = async()=>{

  return await ShoppingBags.find().sort({createdAt:-1});

};

export const getShoppingBagById = async(id)=>{

  return await ShoppingBags.findById(id);

};

export const deleteShoppingBag = async(id)=>{

  return await ShoppingBags.findByIdAndDelete(id);

};

export default{
  createShoppingBagQuote,
  getAllShoppingBags,
  getShoppingBagById,
  deleteShoppingBag
};